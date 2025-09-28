import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const routesFile = resolve(__dirname, '../src/data/breadcrumbRoutes.json');
const routes = JSON.parse(readFileSync(routesFile, 'utf-8'));

const expectedRoutes = {
  '/vision-missions-valeurs': { parent: '/' },
  '/diagnostic': { parent: '/' },
  '/plan-strategique': { parent: '/' },
  '/curriculum-soft-skills': { parent: '/plan-strategique' },
  '/section-internationale-bfi': { parent: '/plan-strategique' },
  '/pc-par-lyceen': { parent: '/plan-strategique' },
  '/mecenat-numerique': { parent: '/plan-strategique' },
  '/construction-cantine': { parent: '/plan-strategique' },
  '/protocole-phare': { parent: '/plan-strategique' },
  '/plan-maintenance-strategique': { parent: '/plan-strategique' },
  '/mediation-entre-pairs': { parent: '/plan-strategique' },
  '/politique-e3d': { parent: '/plan-strategique' },
  '/valorisation-erreur-perseverance': { parent: '/plan-strategique' },
  '/elcs-analyse-complete': { parent: '/diagnostic' }
};

test('all breadcrumb routes served by App.tsx are defined', () => {
  for (const [path, { parent }] of Object.entries(expectedRoutes)) {
    assert.ok(routes[path], `La route "${path}" doit être définie dans le fil d'Ariane.`);
    if (parent) {
      assert.strictEqual(
        routes[path].parent,
        parent,
        `La route "${path}" doit avoir pour parent "${parent}".`
      );
    }
    assert.equal(typeof routes[path].name, 'string', `La route "${path}" doit avoir un nom.`);
  }
});

test('les routes racines sont présentes', () => {
  assert.ok(routes['/'], 'La route racine "/" doit être définie.');
  assert.ok(routes['/plan-strategique'], 'La page plan stratégique doit être définie.');
  assert.ok(routes['/diagnostic'], 'La page diagnostic doit être définie.');
});
