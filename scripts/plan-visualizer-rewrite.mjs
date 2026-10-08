import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'audits/visualizer-inventory.json'), 'utf8'));
const groups = [
  {
    id: 'start', match: p => /\/(Start|Console)\//.test(p.file), priority: 1,
    goal: 'Create, configure, save, and reopen a first report; understand selection and component editing.',
    outline: ['Prerequisites and example result', 'Open the designer', 'Select the page or a component', 'Choose a model and assign fields', 'Arrange and format components', 'Preview, save, and reopen'],
    checks: ['Current report creation and edit entry points', 'Actual panel tabs for page and each component', 'Model and field picker interactions', 'Placement, selection, alignment, distribution, layer order, undo and chart conversion', 'Save destination and reopen behavior'],
    screenshots: ['Empty English workspace', 'Configured category/measure chart', 'Model picker', 'Selection and arrangement controls', 'Save dialog', 'Saved report preview'],
  },
  {
    id: 'charts', match: p => p.file.includes('/Chart/'), priority: 2,
    goal: 'Choose the appropriate chart and configure its required fields with one concrete example.',
    outline: ['Question this chart answers', 'Required and optional field slots', 'Build one example', 'Chart-specific options', 'Read and validate the result', 'Common mistakes'],
    checks: ['Available chart catalog and exact names', 'Required field slots, cardinality, and aggregation', 'Legend versus multiple measures', 'Special options: histogram bins, decomposition splits, bullet targets, range bounds and image fields', 'Selection, filters, tooltips and supported Analytics options'],
    screenshots: ['Each distinct chart with safe sample data', 'Data panel showing required fields', 'Specialized settings only where necessary'],
  },
  {
    id: 'tables', match: p => p.file.includes('/Table/'), priority: 2,
    goal: 'Build detail, pivot, and hierarchy views and understand their grouping and totals.',
    outline: ['Choose a table type', 'Assign fields', 'Configure totals and grouping', 'Format cells', 'Sort and interact', 'Check totals'],
    checks: ['Actual row, column, measure and time slots', 'Table versus pivot versus hierarchy capabilities', 'Subtotals, grand totals, expansion and paging', 'Conditional colors, bars, icons, wrapping and toolbar options'],
    screenshots: ['Each table with the same small dataset', 'Grouping and totals options', 'Conditional formatting result'],
  },
  {
    id: 'maps', match: p => p.file.includes('/Map/'), priority: 3,
    goal: 'Match locations or keys to a map and explain required resources.',
    outline: ['Choose a map type', 'Prerequisites', 'Assign geographic fields', 'Configure appearance', 'Check unmatched locations'],
    checks: ['Available map engines without changing global configuration', 'Coordinates versus location keys', 'GeoJSON key matching', 'Image map coordinate system', 'Resource and provider prerequisites'],
    screenshots: ['Map configured with public or synthetic locations', 'Field mapping panel', 'Image map only if a supported safe resource is available'],
  },
  {
    id: 'filter-controls', match: p => p.file.includes('/Filters/'), priority: 1,
    goal: 'Add a reader-facing filter and make its effect explicit.',
    outline: ['Choose a filter control', 'Bind a field', 'Set selection and defaults', 'Connect target components', 'Test and clear a selection'],
    checks: ['Current filter catalog', 'List, date, date range and numeric control configuration', 'Single versus multiple selection and All', 'Default values, empty values and no-data options', 'Whether targets are automatic or explicit'],
    screenshots: ['Filter control and two affected charts', 'Default-selection settings', 'Date/range settings'],
  },
  {
    id: 'assists', match: p => p.file.includes('/Assists/'), priority: 2,
    goal: 'Add text, images, shapes, and tab containers without duplicating general layout instructions.',
    outline: ['Purpose', 'Add and configure', 'Format and arrange', 'Specific behavior and limitations'],
    checks: ['Text versus Text Box behavior', 'Static image versus data-driven Image chart', 'Image loading/upload workflow', 'Shape styling and actions', 'Tabs entry/exit, rename, reorder and deletion recovery'],
    screenshots: ['Annotated report containing text/image/shapes', 'Tab container editing state'],
  },
  {
    id: 'parameter-workflows', match: p => /Parameter|What-if/.test(p.title), priority: 2,
    goal: 'Create a parameter, bind a controller, and verify its effect on a measure, title, or tab.',
    outline: ['Parameter purpose and scope', 'Create definition', 'Bind controller', 'Use the value', 'Test defaults and runtime values', 'Troubleshooting'],
    checks: ['Global versus report scope', 'Supported types and controller compatibility', 'Default/current value behavior', 'Expression and title syntax', 'Parameter-driven tabs and user/role conditions'],
    screenshots: ['Report parameter definition', 'Controller binding', 'Scenario result before/after', 'Parameter-driven tab settings'],
  },
  {
    id: 'filtering-and-navigation', match: p => /Filter|Drill|Top\/Bottom|Sorting|No Data|Cross-Model/.test(p.title), priority: 1,
    goal: 'Explain filter scope and configure chart-to-chart or report-to-report interaction.',
    outline: ['Choose the interaction', 'Configure source and targets', 'Run a small example', 'Clear or return', 'Verify scope and totals', 'Troubleshoot mismatched fields'],
    checks: ['Component filter UI and apply behavior', 'Subscription/action labels and target selection', 'Cross-filter activation and reset behavior', 'Hierarchy drilldown and drillthrough destination/filter mapping', 'Relative dates and reference time', 'Top/Bottom N sorting, ties and Others behavior', 'Cross-model matching precedence'],
    screenshots: ['Component filter dialog', 'Source-to-target subscription configuration', 'Cross-filter before/after', 'Drillthrough configuration and result', 'Relative-date settings', 'Top N settings'],
  },
  {
    id: 'calculations-and-analytics', match: p => /Calculated|Aggregation|Reference Lines/.test(p.title), priority: 2,
    goal: 'Choose an aggregation or calculation and add reference lines/bands with validated semantics.',
    outline: ['Purpose and prerequisites', 'Configure one example', 'Read the result', 'Scope and supported chart types', 'Validation checks'],
    checks: ['Model versus report measure creation', 'Aggregation overrides and available quick calculations', 'Analytics tab presence by chart type', 'Fixed/statistical lines, bands and diagonal', 'Calculation scope after filters and chart conversion'],
    screenshots: ['Measure menu and aggregation override', 'Calculated/quick measure dialog', 'Analytics line and band editor with result'],
  },
  {
    id: 'report-presentation', match: p => p.file.includes('/Visualization/'), priority: 2,
    goal: 'Configure report layout, tooltips, axes, colors, tabs, and export using shared workflow guidance.',
    outline: ['What the setting changes', 'Where to configure it', 'One practical example', 'Preview and check', 'Related component topics'],
    checks: ['Page versus component dimensions', 'Display modes and mobile layout behavior', 'Tooltip configuration and field display', 'Continuous/categorical axis availability and defaults', 'Conditional color rules and scale behavior', 'Tab container behavior', 'Report/component export formats and output'],
    screenshots: ['Page/display settings', 'Mobile layout', 'Tooltip and axis settings', 'Conditional colors', 'Tabs', 'Export menu/output'],
  },
  {
    id: 'analysis-overview-and-lineage', match: () => true, priority: 3,
    goal: 'Provide a short workflow index and explain report dependencies.',
    outline: ['Choose the next task', 'Open the relevant workflow', 'Inspect report dependencies'],
    checks: ['Available reader interactions', 'Report lineage entry point and displayed dependency types'],
    screenshots: ['Lineage for a documentation demo only, if useful'],
  },
];
const pages = inventory.pages.map(page => {
  const text = fs.readFileSync(path.join(root, page.file), 'utf8');
  const group = groups.find(group => group.match(page));
  return {
    file: page.file, title: page.title, permalink: page.permalink,
    group: group.id, priority: group.priority,
    status: 'unverified-against-current-ui',
    currentHeadings: text.match(/^#{1,3} .+$/gm) ?? [],
    existingImageReferences: page.references.filter(ref => ref.type === 'image').map(ref => ref.target),
  };
});
const findings = [
  { id: 'panel-tabs', evidence: ['Create Your First Analysis Report lists Data, Style, Actions.', 'Chart Reference Lines describes Data, Style, Analytics, Actions for supported charts.'], action: 'Verify the current tabs for each chart; align introductory workspace guidance.', status: 'repository-inconsistency-observed; current-ui-unverified' },
  { id: 'component-filter-entry', evidence: ['Component-Level Filtering instructs users to click Add data.', 'Create Your First Analysis Report instructs users to click + in Filters.'], action: 'Verify current control labels and use one consistent instruction.', status: 'repository-wording-difference-observed; current-ui-unverified' },
  { id: 'chart-addition', evidence: ['Adding Charts documents click-then-click or drag-and-drop.', 'The walkthrough documents click-then-click and explicit placement.'], action: 'Test supported placement gestures and field slots; replace the long image-per-click sequence with a short task.', status: 'repository-wording-difference-observed; current-ui-unverified' },
  { id: 'cross-filter-setup', evidence: ['Cross-Filtering describes charts automatically updating after clicking a point but provides no target configuration steps.', 'Filter Subscriptions separately documents an Action tab and Subscriber selection.'], action: 'Test defaults, target configuration and clearing selection; explain component filters, filter controls and cross-filter scope together.', status: 'documentation-gap-observed; current-ui-unverified' },
  { id: 'tabs-duplication', evidence: ['Tabs (Multi-Tabbed Page) and Tabs both explain creation, ordering and entering/exiting component editing.', 'Parameter-Driven Tab Switching adds a third related workflow.'], action: 'Choose one primary container guide, preserve existing permalinks, and cross-link the parameter workflow.', status: 'duplication-observed; current-ui-unverified' },
  { id: 'filter-overview', evidence: ['Filters lists control types followed by generic benefits, without a worked binding/target workflow.'], action: 'Replace benefits with a control-choice table and one verified filtering example.', status: 'editorial-gap-observed; control-catalog-unverified' },
  { id: 'table-options', evidence: ['Table, Pivot Table and Hierarchy Table repeat long style option lists and comparison tables.'], action: 'Verify capabilities using one shared dataset; focus each page on its distinctive grouping/totals behavior.', status: 'repetition-observed; options-unverified' },
  { id: 'image-provenance', evidence: ['79 scoped pages reference 199 existing images; many assets use numeric/date-like filenames.'], action: 'Do not infer screenshot age, language, or currency from filenames. Replace or retain only after visual comparison and record capture provenance.', status: 'asset-inventory-verified; image-content-unverified' },
];
const output = {
  status: 'planning-only-not-product-documentation',
  basis: 'Repository content inspection. No live UI was accessible; none of the listed controls, defaults, features, or existing screenshots is verified as current.',
  preserve: ['Existing permalinks and unrelated content', 'Existing business reports', 'Product code'],
  pageTemplate: ['One-sentence purpose', 'Prerequisites only when needed', 'Exact verified steps', 'Small English example and expected result', 'One useful screenshot per distinct decision', 'Common failure and next step'],
  screenshotRules: ['Genuine current English UI only', 'Separate clearly named documentation reports with synthetic/public sample data', 'No private unrelated reports, account details, credentials or secrets', 'Capture context plus legible controls; do not recreate UI as an illustration', 'Record product version if visible, capture date, report, workflow, and image path'],
  demoPlan: [
    { name: 'Documentation - Visualizer Basics', purpose: 'Category sales, a KPI, a table and a filter; validate layout and interaction.' },
    { name: 'Documentation - Chart Gallery', purpose: 'Distinct supported chart types using controlled synthetic values.' },
    { name: 'Documentation - Parameters and Analytics', purpose: 'Scenario parameter, titles/tabs, reference line and band.' },
    { name: 'Documentation - Detail', purpose: 'A safe drillthrough target for the basics report.' },
  ],
  findings,
  groups: groups.map(({ match, ...group }) => ({ ...group, pageCount: pages.filter(page => page.group === group.id).length })),
  pages,
};
fs.writeFileSync(path.join(root, 'audits/visualizer-rewrite-plan.json'), JSON.stringify(output, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ pages: pages.length, groups: output.groups.map(({ id, pageCount }) => ({ id, pageCount })), findings: findings.length }));
