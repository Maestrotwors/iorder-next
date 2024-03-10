import { configSchema } from '../config/app-config';

export const validateConfig = (config: Record<string, unknown>): Record<string, unknown> => {
  const parsed = configSchema.safeParse(config);
  if (parsed.success === false) {
    throw new Error(`Configuration validation error: ${parsed.error}`);
  }
  return parsed.data;
};
