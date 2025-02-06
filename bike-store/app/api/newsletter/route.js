import { NextResponse } from 'next/server';
import database from './database';

export async function POST(req) {
    try {
        const { email } = await req.json(); 
        console.log('Received email:', email);

        const existingEmail = database.prepare('SELECT * FROM Newsletter WHERE email = ?').get(email);
        console.log('Existing email:', existingEmail);

        if (existingEmail) {
            return NextResponse.json({ message: 'E-mail already signed to our newsletter, thank you though!' }, { status: 409 });
        }

        const query = database.prepare('INSERT INTO Newsletter (email) VALUES (?)');
        const result = query.run(email);
        console.log('Insert result:', result);

        return NextResponse.json({ message: 'Signed ya in!' }, { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: '(X_X) Beep Boop, server error X__X', error: error.message }, { status: 500 });
    }
}