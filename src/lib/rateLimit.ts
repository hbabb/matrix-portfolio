interface RateLimitRecord {
  timestamp: number;
  count: number;
}

const ratelimitMap = new Map<string, RateLimitRecord>();

export function rateLimit(
  ip: string,
  limit: number,
  timeWindowInMs: number = 60000,
) {
  const now = Date.now();
  const record = ratelimitMap.get(ip);

  if (!record) {
    ratelimitMap.set(ip, { timestamp: now, count: 1 });
    return true;
  }

  if (now - record.timestamp > timeWindowInMs) {
    // Reset if time window has passed
    ratelimitMap.set(ip, { timestamp: now, count: 1 });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}
