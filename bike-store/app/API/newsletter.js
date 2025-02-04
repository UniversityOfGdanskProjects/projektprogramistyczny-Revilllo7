import { NextResponse } from 'next/server';
import database from '../database/database';

export async function POST(req) {
    try {
        const { email } = await req.json();
        const existingEmail = db.prepare('SELECT * FROM Newsletter WHERE email = ?').get(email);
        if (existingEmail) {
            return NextResponse.json({ message: 'Ten e-mail już istnieje w bazie!' }, { status: 409 });
        }
        const query = db.prepare('INSERT INTO Newsletter (email) VALUES (?)');
        query.run(email);

        return NextResponse.json({ message: 'E-mail zapisany do newslettera!' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Błąd serwera', error: error.message }, { status: 500 });
    }
}