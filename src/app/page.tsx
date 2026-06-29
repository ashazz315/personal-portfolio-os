import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  GitBranch,
  Mail,
  Map,
  MoveRight,
  Network,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";
import { InsightChart } from "@/components/insight-chart";

const navItems = ["Home", "Projects", "Insight Dashboard", "AI Workflow", "Contact"];

const capabilityStats = [
  { value: "6", label: "业务部门协同", tone: "text-teal-600" },
  { value: "10+", label: "需求/协调会议", tone: "text-amber-600" },
  { value: "100+", label: "业务图表核查", tone: "text-rose-600" },
  { value: "1200", label: "问卷样本分析", tone: "text-indigo-600" },
];

const modules = [
  {
    icon: Database,
    title: "Data Analysis",
    text: "从 GIS 多源数据、系统数据一致性到问卷交叉分析，强调可追踪、可复核、可解释。",
  },
  {
    icon: Target,
    title: "Product Operation",
    text: "把一线反馈翻译为结构化问题清单、需求池与优先级，用数据校验支撑运营决策。",
  },
  {
    icon: Bot,
    title: "AI Native Workflow",
    text: "用 Prompt、Vibe Coding 和自动化工作流，把求职 gap 期学习沉淀成可演示的小系统。",
  },
];

const projects = [
  {
    title: "工业系统数据一致性治理",
    role: "数据运营 / 产品运营实习",
    period: "陕煤集团榆林化学",
    problem: "试运行系统与现场数据不同步，业务部门反馈分散，问题优先级不清晰。",
    action: "对接 6 个业务部门，参与 10+ 场需求会议，核查 100+ 业务图表并修正约 1000 条核心数据。",
    result: "形成结构化问题清单与日级校验节奏，支持系统稳定运行与后续优化。",
    tags: ["Data QA", "需求整理", "流程拆解"],
  },
  {
    title: "水利资产数据质检闭环",
    role: "数据分析与业务支持",
    period: "北京市水利规划设计研究院",
    problem: "项目工期短、初始误判率高，底层资产数据需要快速完成合规核验。",
    action: "识别 100+ 异常数据，按可识别、不可验证、待处理进行结构化标注与上报。",
    result: "建立统一后续处理机制，降低返工沟通成本，保障项目流程连续性。",
    tags: ["异常识别", "质量控制", "项目交付"],
  },
  {
    title: "双创用户需求调研",
    role: "用户调研与数据助理",
    period: "互联网+ 双创课题",
    problem: "学生在组队、方向选择、资源匹配上存在差异化痛点，需要用样本验证真实需求。",
    action: "设计问卷并回收 1200 份有效样本，用 Excel 透视分析不同年级与专业的需求差异。",
    result: "输出结构化调研摘要，为后续资源配置与活动策略提供决策依据。",
    tags: ["User Research", "Excel", "决策支持"],
  },
];

const dashboardRows = [
  ["Data QA", "100+ 图表", "一致性核查", "稳定"],
  ["Workflow", "300-400/日", "任务拆解", "增长"],
  ["User Insight", "1200 样本", "需求分层", "已验证"],
  ["Coordination", "5-6 部门", "资源调度", "可迁移"],
];

const workflowSteps = [
  "JD / 业务问题拆解",
  "Prompt 结构化建模",
  "Cursor / Codex 快速原型",
  "数据校验与页面表达",
  "复盘沉淀为作品集模块",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8f5]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="返回首页">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
              Z
            </span>
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">
              Zhang Jiahao Portfolio OS
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-md px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:ZhangJiaHao010315@163.com"
            className="inline-flex h-9 items-center gap-2 rounded-md bg-slate-950 px-3 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            <Mail size={15} />
            Connect
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="border-b border-slate-200">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600">
                  <Sparkles size={15} className="text-teal-600" />
                  Data / Product / AI capability system
                </div>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
                  张家豪
                  <span className="block pt-3 text-slate-500">
                    把经历整理成可验证的能力系统。
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  曼彻斯特大学 GIS 硕士。以数据分析为底座，连接产品运营、项目协同与 AI Native
                  工作流，用 Vibe Coding 将想法快速转化为可演示的工具和页面。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {capabilityStats.map((stat) => (
                  <div key={stat.label} className="rounded-md border border-slate-200 bg-white p-4">
                    <div className={`text-2xl font-semibold ${stat.tone}`}>{stat.value}</div>
                    <div className="mt-2 text-xs leading-5 text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase text-slate-400">Capability Console</p>
                  <h2 className="mt-1 text-lg font-semibold">能力增长监控台</h2>
                </div>
                <BarChart3 className="text-teal-600" size={22} />
              </div>
              <InsightChart />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {modules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <div key={module.title} className="rounded-md bg-slate-50 p-3">
                      <Icon size={18} className="text-slate-700" />
                      <h3 className="mt-3 text-sm font-semibold">{module.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{module.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-5">
              {["Home", "Projects", "Insight Dashboard", "AI Workflow", "Contact"].map((item, index) => (
                <div key={item} className="flex min-h-24 flex-col justify-between rounded-md border border-slate-200 p-4">
                  <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Projects"
              title="Case Study 不是经历堆叠，而是问题解决证据链。"
              description="每个项目按 Problem / Action / Result 组织，让招聘方看到可迁移的方法，而不是只看到岗位名称。"
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-slate-500">{project.period}</p>
                      <h3 className="mt-2 text-xl font-semibold leading-7">{project.title}</h3>
                    </div>
                    <BriefcaseBusiness className="shrink-0 text-slate-400" size={20} />
                  </div>
                  <p className="mt-2 text-sm text-teal-700">{project.role}</p>
                  <CaseLine label="Problem" value={project.problem} />
                  <CaseLine label="Action" value={project.action} />
                  <CaseLine label="Result" value={project.result} />
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="insight-dashboard" className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeader
                eyebrow="Insight Dashboard"
                title="把履历数字转成数据产品视角。"
                description="这个模块不是静态荣誉墙，而是将项目事实按指标、场景、方法、状态重新组织。"
              />
              <div className="mt-8 rounded-md border border-slate-200 bg-[#f7f8f5] p-5">
                <div className="flex items-center gap-3">
                  <Network className="text-amber-600" size={22} />
                  <div>
                    <p className="text-sm font-semibold">Capability Graph</p>
                    <p className="text-xs text-slate-500">Data quality, user insight, coordination, AI workflow</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["清洗", "归因", "优先级", "可视化", "复盘", "自动化"].map((item) => (
                    <div key={item} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-slate-200">
              <div className="grid grid-cols-4 bg-slate-950 px-4 py-3 text-xs font-semibold text-white">
                <span>Module</span>
                <span>Metric</span>
                <span>Method</span>
                <span>Status</span>
              </div>
              {dashboardRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-4 border-t border-slate-200 bg-white px-4 py-4 text-sm">
                  {row.map((cell, index) => (
                    <span key={cell} className={index === 0 ? "font-semibold text-slate-950" : "text-slate-600"}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-workflow" className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="AI Workflow"
              title="从 Prompt 到作品，不把 AI 停留在工具清单。"
              description="核心表达是可执行链路：输入问题、建模、生成、验证、沉淀。后续可接入真实 demo、截图和 GitHub 链接。"
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-5">
              {workflowSteps.map((step, index) => (
                <div key={step} className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400">STEP {index + 1}</span>
                    {index < workflowSteps.length - 1 ? (
                      <MoveRight size={16} className="text-slate-400" />
                    ) : (
                      <CheckCircle2 size={16} className="text-teal-600" />
                    )}
                  </div>
                  <p className="mt-8 text-sm font-semibold leading-6">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <CapabilityBlock icon={Boxes} title="Portfolio System" text="用模块化数据结构管理经历、项目、指标、工具链。" />
              <CapabilityBlock icon={GitBranch} title="Vibe Coding" text="用 AI 协同完成页面原型、组件拆分、文案压缩与验证。" />
              <CapabilityBlock icon={Map} title="Learning Roadmap" text="将 gap 期学习映射为可展示的能力增长路径。" />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase text-teal-300">Contact</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
                面向数据分析、产品运营、AI Native 增长与项目协同岗位。
              </h2>
            </div>
            <div className="grid gap-3">
              <a
                href="mailto:ZhangJiaHao010315@163.com"
                className="flex items-center justify-between rounded-md bg-white px-4 py-4 text-sm font-semibold text-slate-950"
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} />
                  ZhangJiaHao010315@163.com
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="tel:19801061621"
                className="flex items-center justify-between rounded-md border border-white/15 px-4 py-4 text-sm font-semibold text-white"
              >
                <span className="flex items-center gap-3">
                  <Phone size={18} />
                  19801061621
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-normal text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function CaseLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-5 border-t border-slate-100 pt-4">
      <p className="text-xs font-semibold uppercase text-slate-400">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{value}</p>
    </div>
  );
}

function CapabilityBlock({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Boxes;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5">
      <Icon size={20} className="text-rose-600" />
      <h3 className="mt-5 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
