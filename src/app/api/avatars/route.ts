import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const avatarDir = path.join(process.cwd(), 'public', 'images', 'ui', 'avatar-placeholder');
    const categories = fs.readdirSync(avatarDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory());

    const avatars: { [category: string]: string[] } = {};

    for (const category of categories) {
      const categoryName = category.name;
      const categoryPath = path.join(avatarDir, categoryName);
      const files = fs.readdirSync(categoryPath);

      avatars[categoryName] = files.map(file => `/images/ui/avatar-placeholder/${categoryName}/${file}`);
    }

    return NextResponse.json({ avatars });
  } catch (error) {
    console.error('Local avatar error:', error);
    return NextResponse.json({ error: 'Failed to load local avatars' }, { status: 500 });
  }
}
