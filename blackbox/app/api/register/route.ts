import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export async function POST(
    request: Request
) {
    try{
    const body = await request.json();
    const {
        email, 
        name,
        password
    } = body;
    if(!email || !password || !name){
        return new NextResponse('Missing info', {status:400});
    }

    if (!passwordRegex.test(password)) {
        return new NextResponse('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data:{
            email, 
            name, 
            hashedPassword
        }
    });
    return NextResponse.json(user);
} catch (error: any){
    console.log(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Error', {status:500});
}
};