import fs from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

const INSTAGRAM_ROOT = path.join(process.cwd(), 'data', 'instagram');

const MIME_TYPES: Record<string, string> = {
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

export async function GET(
  _request: Request,
  { params }: { params: { path?: string[] } },
) {
  const requestedSegments = params.path ?? [];

  if (requestedSegments.length === 0) {
    return NextResponse.json({ error: 'No path provided.' }, { status: 400 });
  }

  const requestedPath = path.join(...requestedSegments);
  const absolutePath = path.resolve(INSTAGRAM_ROOT, requestedPath);

  if (!absolutePath.startsWith(INSTAGRAM_ROOT + path.sep) && absolutePath !== INSTAGRAM_ROOT) {
    return NextResponse.json({ error: 'Invalid path.' }, { status: 400 });
  }

  const extension = path.extname(absolutePath).toLowerCase();
  const contentType = MIME_TYPES[extension];

  if (!contentType) {
    return NextResponse.json({ error: 'Unsupported file type.' }, { status: 400 });
  }

  try {
    const fileBuffer = await fs.readFile(absolutePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Cache-Control': 'public, max-age=2592000, stale-while-revalidate=86400',
        'Content-Type': contentType,
      },
    });
  } catch {
    return NextResponse.json({ error: 'File not found.' }, { status: 404 });
  }
}
