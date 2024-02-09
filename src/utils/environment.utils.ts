import { Environment } from '../enums';
import { def } from './generic.utils';

export interface DefaultEnvironmentVariables {
  ENVIRONMENT: Environment;
}

export const DefaultEnvironmentVariablesValues: DefaultEnvironmentVariables = {
  ENVIRONMENT: Environment.DEVELOPMENT,
};

export type EnvironmentValueType =
  | string
  | number
  | boolean
  | undefined
  | unknown;

export function getEnv<
  EnvironmentVariables,
  T extends EnvironmentValueType | EnvironmentValueType[] = unknown,
>(
  variableName: keyof EnvironmentVariables,
  defaultValues?: EnvironmentVariables,
): T {
  const defaultValue: T = def(defaultValues)
    ? (defaultValues[variableName] as T)
    : null;

  let environmentPrefix = '';

  if (typeof window !== 'undefined') {
    environmentPrefix = 'REACT_APP_';
  }

  let value: T;
  if (Object.keys(process.env).indexOf(variableName as string) === -1) {
    variableName =
      `${environmentPrefix}${variableName.toString()}` as keyof EnvironmentVariables;
  }
  if (Object.keys(process.env).indexOf(variableName as string) !== -1) {
    value = process.env[variableName as string] as T;
  } else {
    value = defaultValue;
  }
  if (!def(defaultValue)) {
    return value as T;
  }
  switch (typeof defaultValue) {
    case 'number':
      return Number(value) as T;
    case 'boolean':
      return ('true' === value) as T;
    case 'object':
      return JSON.parse(value as string) as T;
    default:
      return value as T;
  }
}

export function getEnvironment(): Environment {
  return getEnv<DefaultEnvironmentVariables, Environment>(
    'ENVIRONMENT',
    DefaultEnvironmentVariablesValues,
  );
}

export function isProduction(): boolean {
  return getEnvironment() === Environment.PRODUCTION;
}

export function isDevelopment(): boolean {
  return getEnvironment() === Environment.DEVELOPMENT;
}

export function isStaging(): boolean {
  return getEnvironment() === Environment.STAGING;
}

export function isEnvironment(environment: Environment): boolean {
  return getEnvironment() === environment;
}
