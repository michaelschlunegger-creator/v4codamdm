const fs = require('fs');
const path = require('path');
const vm = require('vm');

const scriptPath = path.join(__dirname, '..', 'script.js');
const source = fs.readFileSync(scriptPath, 'utf8');
const match = source.match(/const verticals = ([\s\S]*?\n];)/);
if (!match) {
  throw new Error('Unable to locate verticals definition in script.js');
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext('verticals = ' + match[1], sandbox);
const verticals = sandbox.verticals;

function slugify(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ensureQuestion(text) {
  if (typeof text !== 'string') return 'How does this impact your operation?';
  const trimmed = text.trim();
  if (!trimmed) return 'How does this impact your operation?';
  const sanitized = trimmed.replace(/[?]+$/, '');
  return `${sanitized}?`;
}

function formatOpeningQuestion(questionText, isFirstQuestion, industry, persona) {
  const baseQuestion = ensureQuestion(
    typeof questionText === 'string' ? questionText.trim() : '',
  );

  if (!isFirstQuestion) {
    return baseQuestion;
  }

  const industryName = industry?.name || 'this industry';
  const personaLabel = persona?.name || 'peer';
  const focusPunch = (persona?.focusAreas || [])[0] ||
    'working capital and reliability';
  const dramaticHook = `Recently, a ${personaLabel} peer in ${industryName} unlocked $10M by eliminating 10% duplicate stock tied to ${focusPunch}.`;

  return ensureQuestion(`${dramaticHook} ${baseQuestion}`);
}

function ensureSentence(text) {
  if (typeof text !== 'string') return '';
  const trimmed = text.trim();
  if (!trimmed) return '';
  const lastChar = trimmed.slice(-1);
  if (['.', '?', '!'].includes(lastChar)) {
    return trimmed;
  }
  return `${trimmed}.`;
}

function buildImportanceNote(question, persona) {
  const focusAreas = persona?.focusAreas || [];
  const focusSummary = focusAreas.slice(0, 2).join(' and ') ||
    'cash, reliability, and control';

  const questionTopicRaw = ensureQuestion(
    typeof question?.text === 'string' ? question.text.trim() : '',
  ).replace(/[?]+$/, '');
  const questionTopic = questionTopicRaw
    ? `"${questionTopicRaw}"`
    : 'this topic';

  return ensureSentence(
    `This opener tests how the persona links ${questionTopic} to ${focusSummary}, positioning CODA as the fastest way to repeat the proof point.`,
  );
}

function buildCoachingCue(quality, persona) {
  const personaOutcome = persona?.redPath || 'Guide toward an evidence-backed PoC.';
  const baseCue =
    quality === 'Optimal'
      ? 'Strong response—affirm the impact and suggest how CODA proves it in a 4-week pulse.'
      : quality === 'Medium'
        ? 'Good instinct—tighten the link to business KPIs so the persona feels the urgency.'
        : 'Reframe with a crisp business outcome before diving into details to keep credibility high.';

  return ensureSentence(`${baseCue} ${personaOutcome}`);
}

function labelOption(question, index) {
  const bestIndex = question.bestOptionIndex;
  const weakIndex =
    typeof question.weakOptionIndex === 'number'
      ? question.weakOptionIndex
      : question.options
          .map((_, idx) => idx)
          .filter((idx) => idx !== bestIndex)[0];
  if (index === bestIndex) return 'Optimal';
  if (index === weakIndex) return 'Medium';
  return 'Unfavorable';
}

const lines = [];
lines.push('# Roleplay Walkthrough Audit');
lines.push('');
lines.push('Generated transcripts for every persona to validate conversation flow and coaching cues. Each option is tagged with its quality level.');
lines.push('');

const totalPersonas = verticals.reduce((sum, industry) => sum + industry.personas.length, 0);
const totalQuestions = verticals.reduce(
  (sum, industry) =>
    sum + industry.personas.reduce((personaSum, persona) => personaSum + persona.questions.length, 0),
  0,
);

lines.push('## Overview');
lines.push('');
lines.push('- Full library of every roleplay path available in the experience.');
lines.push(`- Industries: ${verticals.length} | Personas: ${totalPersonas} | Questions: ${totalQuestions}.`);
lines.push('');

lines.push('## Navigation');
lines.push('');
verticals.forEach((industry) => {
  const industryTitle = industry.name;
  const industrySlug = slugify(industryTitle);
  lines.push(`- [${industryTitle}](#${industrySlug})`);
  industry.personas.forEach((persona) => {
    const personaTitle = `${persona.personaName || persona.name} — ${persona.name}`;
    const personaSlug = slugify(personaTitle);
    lines.push(
      `  - [${personaTitle}](#${personaSlug}) (${persona.questions.length} questions)`,
    );
  });
});
lines.push('');

verticals.forEach((industry) => {
  lines.push(`## ${industry.name}`);
  lines.push('');
  industry.personas.forEach((persona) => {
    lines.push(`### ${persona.personaName || persona.name} — ${persona.name}`);
    lines.push(`Company: ${persona.company}`);
    lines.push(`Role: ${persona.role}`);
    lines.push(`Red path: ${persona.redPath}`);
    lines.push(`Focus areas: ${persona.focusAreas.join('; ')}`);
    lines.push('');

    persona.questions.forEach((question, idx) => {
      const displayedQuestion = formatOpeningQuestion(
        question.text,
        idx === 0,
        industry,
        persona,
      );
      lines.push(`#### Question ${idx + 1}`);
      lines.push(displayedQuestion);
      lines.push('');

      question.options.forEach((optionText, optionIndex) => {
        const quality = labelOption(question, optionIndex);
        const feedback = question.feedback[
          quality === 'Optimal'
            ? 'best'
            : quality === 'Medium'
              ? 'weak'
              : 'bad'
        ];
        lines.push(`- ${quality}: ${optionText}`);
        lines.push(`  - Coaching: ${feedback}`);
      });

      const importance = buildImportanceNote(question, persona);
      const coachingCue = buildCoachingCue('Optimal', persona);
      lines.push('');
      lines.push(`Why this question matters: ${importance}`);
      lines.push(`Optimal coaching cue: ${coachingCue}`);
      lines.push('');
    });

    lines.push('');
  });
});

const outputPath = path.join(__dirname, '..', 'roleplay_walkthrough.md');
fs.writeFileSync(outputPath, lines.join('\n'));
console.log('Walkthrough generated at', outputPath);
