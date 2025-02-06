// app/api/mono-deal-tcp/route.js

import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Read your environment variables
const { DATABASE_URL, VALID_KEY } = process.env;

// Set up the PostgreSQL connection pool.
// (If your connection string already has sslmode=require, you may not need to force SSL options.)
const pool = new Pool({
    connectionString: DATABASE_URL,
    // For many Neon/Postgres setups, this is required:
    ssl: {
        rejectUnauthorized: false,
    },
});

// GET handler: fetch and return the current URL from the database.
export async function GET() {
    try {
        const client = await pool.connect();
        // Assuming there is one record you want to retrieve.
        const result = await client.query('SELECT url FROM mono_deal_tcp LIMIT 1');
        client.release();

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'No URL found' }, { status: 404 });
        }

        // Return only the URL in JSON.
        const { url } = result.rows[0];
        return NextResponse.json({ url });
    } catch (error) {
        console.error('Error fetching URL:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// POST handler: update the URL if a valid key is provided.
export async function POST(request: any) {
    try {
        const body = await request.json();
        const { url, key } = body;

        if (!url || !key) {
            return NextResponse.json(
                { error: 'Both "url" and "key" fields are required.' },
                { status: 400 }
            );
        }

        // Validate the provided key.
        if (key !== VALID_KEY) {
            return NextResponse.json({ error: 'Invalid key provided.' }, { status: 401 });
        }

        const client = await pool.connect();

        // Update the URL.
        // This example uses a simple UPDATE. You might want to restrict which row is updated
        // (for example, by id) or do an UPSERT if no record exists.
        const updateQuery = 'UPDATE mono_deal_tcp SET url = $1';
        await client.query(updateQuery, [url]);
        client.release();

        return NextResponse.json({ message: 'URL updated successfully.' });
    } catch (error) {
        console.error('Error updating URL:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
