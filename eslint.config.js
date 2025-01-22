import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from '@typescript-eslint/eslint-plugin'; // TypeScript ESLint 플러그인
import tsParser from '@typescript-eslint/parser'; // TypeScript 파서
import prettier from 'eslint-config-prettier'; // Prettier 규칙 비활성화
import react from 'eslint-plugin-react'; // React ESLint 플러그인 추가

export default [
    js.configs.recommended, // JavaScript 기본 설정
    {
        files: ['**/*.{ts,tsx}'], // TypeScript 및 TSX 파일에 대한 설정
        ignores: ['dist', 'node_modules'], // 무시할 디렉토리 추가
        languageOptions: {
            ecmaVersion: 2020, // 최신 ECMAScript 버전
            globals: globals.browser, // 브라우저 환경
            parser: tsParser, // TypeScript 파일을 파싱하기 위한 파서 설정
        },
        plugins: {
            'react-hooks': reactHooks, // React Hooks 규칙 추가
            'react-refresh': reactRefresh, // React Refresh 관련 플러그인
            '@typescript-eslint': tsEslint, // TypeScript ESLint 플러그인 추가
            react, // React 플러그인 추가
        },
        rules: {
            ...reactHooks.configs.recommended.rules, // React Hooks 추천 규칙
            ...tsEslint.configs.recommended.rules, // TypeScript 추천 규칙
            'react/self-closing-comp': 'warn', // 셀프 클로징 태그 경고
            'react/react-in-jsx-scope': 'off', // React 17 이상에서 JSX Scope 불필요
            'react/prop-types': 'off', // TypeScript를 사용하는 경우 PropTypes 비활성화
            'no-console': 'warn', // console.log 경고
            'no-debugger': 'warn', // debugger 사용 경고
        },
    },
    prettier, // Prettier와의 충돌을 방지하기 위한 확장 추가
];
