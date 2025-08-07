import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Capitalize utility
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export async function GET(req: NextRequest) {
  try {
    const avatarDir = path.join(process.cwd(), 'public', 'images', 'ui', 'avatar-placeholder');

    const role = req.nextUrl.searchParams.get('role') || 'user'; // default to normal user
    const isAdmin = role === 'admin';

    const categories = fs
      .readdirSync(avatarDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());

    const formatted = [];

    for (const category of categories) {
      const categoryName = category.name;

      // Skip 'id' for normal users
      if (categoryName === 'id' && !isAdmin) continue;

      const categoryPath = path.join(avatarDir, categoryName);

      if (categoryName === 'job') {
        const jobs = fs
          .readdirSync(categoryPath, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory());

        for (const job of jobs) {
          const jobName = capitalize(job.name);
          const jobPath = path.join(categoryPath, job.name);

          const avatars = [];

          const male = path.join(jobPath, 'male.png');
          const female = path.join(jobPath, 'female.png');

          if (fs.existsSync(male)) {
            avatars.push({
              name: `${jobName} Male`,
              url: `/images/ui/avatar-placeholder/job/${job.name}/male.png`,
            });
          }

          if (fs.existsSync(female)) {
            avatars.push({
              name: `${jobName} Female`,
              url: `/images/ui/avatar-placeholder/job/${job.name}/female.png`,
            });
          }

          if (avatars.length > 0) {
            formatted.push({
              title: jobName,
              avatars,
            });
          }
        }
      } else {
        // Boy, Girl, Id (filtered above)
        const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.png'));

        formatted.push({
          title: capitalize(categoryName),
          avatars: files.map(file => ({
            name: path.parse(file).name,
            url: `/images/ui/avatar-placeholder/${categoryName}/${file}`,
          })),
        });
      }
    }

    return NextResponse.json({ categories: formatted });
  } catch (error) {
    console.error('Local avatar error:', error);
    return NextResponse.json({ error: 'Failed to load local avatars' }, { status: 500 });
  }
}
