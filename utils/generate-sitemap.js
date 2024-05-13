const fs = require('fs');
const path = require('path');

// Generate sitemap content
function generateSitemap(pages) {
    const baseUrl = 'https://localhost:3000';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
        xml += `
        <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${currentDate}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>`;
    });

    xml += `
    </urlset>`;

    return xml;
}

// List pages to include in the sitemap
const pages = [
    '/',
    '/cyclotrons',
    '/contact',
    '/teams'
];


// Write content to sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const sitemapContent = generateSitemap(pages);

fs.writeFile(sitemapPath, sitemapContent, err => {
    if (err) {
        console.error('Erreur lors de la génération du sitemap :', err);
    } else {
        console.log('Le fichier sitemap.xml a été généré avec succès !');
    }
});