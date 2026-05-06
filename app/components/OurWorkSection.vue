<script setup lang="ts">
const { t } = useI18n()

interface Project {
  nameKey: string
  categoryKey: string
  descKey: string
  tags: string[]
  accent: string
  accentBg: string
  accentBorder: string
  accentGlow: string
  flagship?: boolean
  mockupLines: string[]
  mockupDots: string[]
  url?: string
}

const projects: Project[] = [
  {
    nameKey: 'work.projects.blueauditor.name',
    categoryKey: 'work.projects.blueauditor.category',
    descKey: 'work.projects.blueauditor.desc',
    tags: ['ESG', 'SaaS', 'ClimateTech', 'Data Infrastructure'],
    accent: '#38BDF8',
    accentBg: 'rgba(56,189,248,0.07)',
    accentBorder: 'rgba(56,189,248,0.18)',
    accentGlow: 'rgba(56,189,248,0.25)',
    flagship: true,
    mockupLines: ['w-24 opacity-60', 'w-40 opacity-40', 'w-32 opacity-50', 'w-20 opacity-30'],
    mockupDots: ['bg-[#38BDF8]', 'bg-[#7DD3FC]', 'bg-[#BAE6FD]'],
    url: 'https://blueauditor.com',
  },
  {
    nameKey: 'work.projects.memoryhive.name',
    categoryKey: 'work.projects.memoryhive.category',
    descKey: 'work.projects.memoryhive.desc',
    tags: ['AI', 'Knowledge Systems', 'Productivity', 'Automation'],
    accent: '#FB923C',
    accentBg: 'rgba(251,146,60,0.07)',
    accentBorder: 'rgba(251,146,60,0.18)',
    accentGlow: 'rgba(251,146,60,0.22)',
    flagship: false,
    mockupLines: ['w-28 opacity-60', 'w-36 opacity-40', 'w-20 opacity-50', 'w-32 opacity-30'],
    mockupDots: ['bg-[#FB923C]', 'bg-[#FCD34D]', 'bg-[#FDBA74]'],
    url: undefined,
  },
  {
    nameKey: 'work.projects.camporganizer.name',
    categoryKey: 'work.projects.camporganizer.category',
    descKey: 'work.projects.camporganizer.desc',
    tags: ['Management Platform', 'Operations', 'Web Platform'],
    accent: '#34D399',
    accentBg: 'rgba(52,211,153,0.07)',
    accentBorder: 'rgba(52,211,153,0.18)',
    accentGlow: 'rgba(52,211,153,0.22)',
    flagship: false,
    mockupLines: ['w-32 opacity-60', 'w-24 opacity-40', 'w-40 opacity-50', 'w-16 opacity-30'],
    mockupDots: ['bg-[#34D399]', 'bg-[#6EE7B7]', 'bg-[#A7F3D0]'],
    url: undefined,
  },
  {
    nameKey: 'work.projects.deltaflow.name',
    categoryKey: 'work.projects.deltaflow.category',
    descKey: 'work.projects.deltaflow.desc',
    tags: ['Automation', 'Infrastructure', 'Internal Tools', 'AI'],
    accent: '#A78BFA',
    accentBg: 'rgba(167,139,250,0.07)',
    accentBorder: 'rgba(167,139,250,0.18)',
    accentGlow: 'rgba(167,139,250,0.25)',
    flagship: false,
    mockupLines: ['w-20 opacity-60', 'w-36 opacity-40', 'w-28 opacity-50', 'w-24 opacity-30'],
    mockupDots: ['bg-[#A78BFA]', 'bg-[#7C4DFF]', 'bg-[#C4B5FD]'],
    url: undefined,
  },
]
</script>

<template>
  <section class="py-24 relative">
    <div class="absolute inset-0 bg-[#080D1A]/60" />
    <div class="section-container relative z-10">
      <SectionHeading :label="t('work.label')">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {{ t('work.heading') }}
        </h2>
        <p class="text-lg text-secondary max-w-2xl mx-auto">
          {{ t('work.subtitle') }}
        </p>
      </SectionHeading>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="project in projects"
          :key="project.nameKey"
          :class="['group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-default',
                   'hover:-translate-y-1',
                   project.flagship ? 'md:col-span-2' : '']"
          :style="`background: ${project.accentBg}; border: 1px solid ${project.accentBorder};`"
        >
          <!-- Hover glow -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            :style="`box-shadow: 0 0 60px ${project.accentGlow} inset, 0 8px 40px ${project.accentGlow};`"
          />

          <!-- Abstract mockup background -->
          <div class="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-30 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none">
            <!-- Grid lines -->
            <div
              class="absolute inset-0"
              :style="`background-image: linear-gradient(${project.accent}18 1px, transparent 1px), linear-gradient(90deg, ${project.accent}18 1px, transparent 1px); background-size: 28px 28px;`"
            />
            <!-- Radial glow -->
            <div
              class="absolute top-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl"
              :style="`background: radial-gradient(circle, ${project.accentGlow} 0%, transparent 70%);`"
            />
            <!-- Mockup horizontal bars -->
            <div class="absolute top-8 right-6 space-y-2.5">
              <div
                v-for="(bar, i) in project.mockupLines"
                :key="i"
                :class="['h-1.5 rounded-full', bar]"
                :style="`background: ${project.accent};`"
              />
            </div>
            <!-- Floating dots -->
            <div class="absolute bottom-12 right-8 flex gap-2">
              <div
                v-for="(dot, i) in project.mockupDots"
                :key="i"
                :class="['w-2 h-2 rounded-full', dot]"
                style="opacity: 0.7;"
              />
            </div>
            <!-- Abstract lines -->
            <svg class="absolute bottom-0 right-0 w-40 h-40 opacity-20" viewBox="0 0 160 160" fill="none">
              <circle cx="80" cy="80" r="60" :stroke="project.accent" stroke-width="1" stroke-dasharray="6 4" />
              <circle cx="80" cy="80" r="40" :stroke="project.accent" stroke-width="0.5" />
              <line x1="80" y1="20" x2="80" y2="140" :stroke="project.accent" stroke-width="0.5" />
              <line x1="20" y1="80" x2="140" y2="80" :stroke="project.accent" stroke-width="0.5" />
            </svg>
          </div>

          <!-- Content -->
          <div :class="['relative z-10 p-8', project.flagship ? 'md:p-10' : '']">
            <!-- Top row -->
            <div class="flex items-start justify-between gap-4 mb-5">
              <div>
                <!-- Flagship badge -->
                <div
                  v-if="project.flagship"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                  :style="`background: ${project.accentBg}; border: 1px solid ${project.accentBorder}; color: ${project.accent};`"
                >
                  <span class="w-1.5 h-1.5 rounded-full animate-pulse" :style="`background: ${project.accent};`" />
                  {{ t('work.flagship') }}
                </div>

                <h3
                  :class="['font-bold text-white tracking-tight', project.flagship ? 'text-3xl md:text-4xl' : 'text-2xl']"
                >
                  {{ t(project.nameKey) }}
                </h3>
              </div>

              <!-- Category chip -->
              <span
                class="flex-shrink-0 hidden sm:inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium"
                :style="`background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.55);`"
              >
                {{ project.tags[0] }}
              </span>
            </div>

            <!-- Category label -->
            <p class="text-xs font-semibold uppercase tracking-widest mb-3" :style="`color: ${project.accent};`">
              {{ t(project.categoryKey) }}
            </p>

            <!-- Description -->
            <p
              :class="['text-secondary leading-relaxed mb-6', project.flagship ? 'text-base max-w-xl' : 'text-sm']"
            >
              {{ t(project.descKey) }}
            </p>

            <!-- Footer: tags + CTA -->
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-md text-xs font-medium"
                  :style="`background: ${project.accentBg}; border: 1px solid ${project.accentBorder}; color: ${project.accent};`"
                >
                  {{ tag }}
                </span>
              </div>

              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0"
                :style="`background: ${project.accentBg}; border: 1px solid ${project.accentBorder}; color: ${project.accent};`"
                @mouseover="($event.currentTarget as HTMLElement).style.background = project.accentBorder"
                @mouseleave="($event.currentTarget as HTMLElement).style.background = project.accentBg"
              >
                View Project
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span
                v-else
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium flex-shrink-0 cursor-not-allowed"
                :style="`background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); color: rgba(255,255,255,0.25);`"
              >
                {{ t('work.comingSoon') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
