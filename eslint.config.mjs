import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

// Regras do Next (inclui Core Web Vitals) + regras de TypeScript, como variáveis sem uso.
export default defineConfig([...nextVitals, ...nextTypescript]);
