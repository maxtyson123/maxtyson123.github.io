import { EdgeConfig } from '@vercel/edge-config';

const edgeConfig = new EdgeConfig(process.env.EDGE_CONFIG_URL);  // The URL to your Edge Config

const VALID_KEY = process.env.VALID_KEY;  // The key to update the URL

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Handle POST request: Update the URL if key is valid
        const { url, key } = req.body;

        // Check if the provided key matches
        if (key !== VALID_KEY) {
            return res.status(403).json({ message: 'Forbidden: Invalid key' });
        }

        try {
            // Update the Edge Config with the provided URL
            await edgeConfig.set('monoDealUrl', url);
            return res.status(200).json({ message: 'URL updated successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error updating URL' });
        }
    }

    if (req.method === 'GET') {
        // Handle GET request: Fetch the URL
        try {
            const url = await edgeConfig.get('monoDealUrl');
            if (url) {
                return res.status(200).json({ url });
            } else {
                return res.status(404).json({ message: 'No URL found' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error retrieving URL' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}
