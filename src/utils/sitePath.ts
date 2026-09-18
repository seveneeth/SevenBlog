/**
 * 生成站内链接。
 * 本地开发的 BASE_URL 为 /，GitHub Pages 项目站点则为 /SevenBlog。
 */
export function sitePath(path: string): string {
  if (!path.startsWith('/')) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
