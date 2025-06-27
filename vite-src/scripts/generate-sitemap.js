#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://jrclarkin.com';
const BLOG_POSTS_DIR = path.join(__dirname, '../src/pages/blog-posts');
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Static routes that don't change
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/tools', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
];

// Function to convert filename to URL path
function filenameToPath(filename) {
  // Remove .tsx extension
  const name = filename.replace('.tsx', '');
  
  // Convert PascalCase to kebab-case
  return name
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '') // Remove leading dash
    .replace(/([0-9]+)/g, '-$1') // Add dash before numbers
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .replace(/^-|-$/g, ''); // Remove leading/trailing dashes
}

// Function to get blog post paths
function getBlogPostPaths() {
  try {
    const files = fs.readdirSync(BLOG_POSTS_DIR);
    return files
      .filter(file => file.endsWith('.tsx'))
      .map(file => {
        const path = filenameToPath(file);
        return {
          path: `/blog/${path}`,
          priority: '0.7',
          changefreq: 'yearly'
        };
      });
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

// Function to generate sitemap XML
function generateSitemapXML(routes) {
  const now = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// Main function
function main() {
  console.log('Generating sitemap...');
  
  const blogRoutes = getBlogPostPaths();
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];
  
  console.log(`Found ${blogRoutes.length} blog posts`);
  console.log(`Total routes: ${allRoutes.length}`);
  
  const sitemapXML = generateSitemapXML(allRoutes);
  
  try {
    fs.writeFileSync(OUTPUT_FILE, sitemapXML);
    console.log(`Sitemap generated successfully: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error writing sitemap:', error);
    process.exit(1);
  }
}

main(); 