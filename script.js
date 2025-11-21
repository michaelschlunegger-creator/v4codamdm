const verticals = [
  {
    id: "oilGas",
    name: "Oil & Gas",
    description: "Asset-intensive upstream and downstream operations.",
    personas: [
      {
        id: "ceoCfo",
        name: "CEO / CFO",
        personaName: "Sloane Hartwell",
        company: "HelioVista Energy",
        role: "Owns profitable growth and capital allocation.",
        shortDescription:
          "Needs confidence that plant data is trustworthy so cash is not frozen in duplicate or misclassified materials.",
        focusAreas: [
          "Working capital locked in redundant stock",
          "Visibility across sites and systems",
          "Confidence to fund rapid pilots",
        ],
        redPath:
          "Link duplicates to cash release, quantify the pilot impact, and secure an executive sponsor for the PoC.",
        questions: [
          {
            id: "ceo-cfo-1",
            text: "A peer CEO unlocked $10M by exposing duplicate spares—how do you measure the cash tied up in spare parts and project materials today?",
            options: [
              "Finance reconciles stock quarterly and adjusts reserves when counts look high.",
              "We monitor a live dashboard that flags duplicates, so working capital stays visible.",
              "Controllers rely on historical spend because material masters are inconsistent.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "A live view means we can plug CODA into existing controls and prove incremental cash unlocks quickly.",
              weak: "Quarterly reconciliation is slow; tie the lag to cash risk and propose a PoC that validates live data feeds.",
              bad: "Guesswork highlights the data gap. Position CODA as the fastest path to measurable, audit-ready visibility.",
            },
          },
          {
            id: "ceo-cfo-2",
            text: "When duplicate materials slip into the catalog, what downstream impact hurts you the most?",
            options: [
              "Higher carrying costs and missed savings targets on procurement programs.",
              "Maintenance slows because technicians struggle to find the right description.",
              "We just store more inventory to be safe, so there’s no perceived impact.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Connect CODA's deduplication to working-capital targets and procurement savings the C-suite tracks.",
              weak: "Maintenance friction is real, but link it back to financial KPIs so the CFO sees the value path.",
              bad: "Storing more inventory signals wasted cash. Use this to highlight how clean masters reduce buffers.",
            },
          },
          {
            id: "ceo-cfo-3",
            text: "What would you need to see in a 4-week pilot to greenlight funding?",
            options: [
              "A quantified forecast of cash released plus a plan to scale across refineries.",
              "A few reports that show data quality trends over time.",
              "Proof that engineering and maintenance teams can tolerate another tool in their stack.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Align the pilot on cash release and scale, then map CODA outputs directly to her investment criteria.",
              weak: "Reports without financial linkage will not unlock budget. Reframe toward measurable KPIs.",
              bad: "Tool tolerance misses the CFO's lens. Pivot to business outcomes and risk reduction.",
            },
          },
        ],
      },
      {
        id: "financeCfo",
        name: "Finance / CFO",
        personaName: "Rafael McBride",
        company: "HelioVista Energy",
        role: "Safeguards liquidity, reporting accuracy, and governance.",
        shortDescription:
          "Focuses on working-capital release and auditable data that keeps reconciliations clean across subsidiaries.",
        focusAreas: [
          "Consolidated visibility across ERPs",
          "Working-capital unlocks tied to data quality",
          "Governance that stands up to audit",
        ],
        redPath:
          "Quantify leakage from misclassified spend, model the cash unlocked by cleansing, and propose a governance-led pilot.",
        questions: [
          {
            id: "fin-cfo-1",
            text: "After consolidating vendor data across refineries, how much visibility do you have into material stock and vendor spend across all sites?",
            options: [
              "Yes—we consolidate and trust the numbers.",
              "Partially—we reconcile across a few ERPs, but it takes effort.",
              "Each site runs its own data, so consolidation is painful.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great. CODA can validate that trusted view and surface hidden duplicates without disrupting reporting.",
              weak: "Partial visibility is costly time. Offer CODA to standardize attributes and automate roll-ups.",
              bad: "Fragmentation screams risk. Use CODA to create a single, auditable baseline before the next close.",
            },
          },
          {
            id: "fin-cfo-2",
            text: "How do you calculate the working capital you could release by cleansing duplicate or obsolete stock?",
            options: [
              "We model scenarios by category to see the cash impact quickly.",
              "We carry a rough estimate based on historical write-offs.",
              "We don’t calculate it—operations just carries the stock.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Perfect fit. CODA can feed that model with real duplication rates to validate the release.",
              weak: "A rough estimate is a starting point. Offer a data-backed assessment to sharpen the forecast.",
              bad: "No calculation means hidden cash. Frame CODA as the fastest way to prove and capture the upside.",
            },
          },
          {
            id: "fin-cfo-3",
            text: "When auditors challenge material balances, what evidence do you rely on?",
            options: [
              "Governed master data with traceable approvals and history.",
              "Manual reconciliations and email trails from the last cycle.",
              "We defer to operations to explain any mismatches.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Traceability pairs perfectly with CODA's governance. It keeps approvals and lineage audit-ready.",
              weak: "Manual trails consume time. CODA can centralize approvals and make evidence collection trivial.",
              bad: "Deferring to operations risks findings. Position CODA as the defensible system of record.",
            },
          },
        ],
      },
      {
        id: "cioHeadIt",
        name: "CIO / Head of IT",
        personaName: "Priya Nandakumar",
        company: "HelioVista Energy",
        role: "Owns the application landscape and integration standards.",
        shortDescription:
          "Balances SAP/Maximo governance with scalable integrations that prevent duplicate masters across systems.",
        focusAreas: [
          "Cross-system master data flow",
          "Governance ownership and approval paths",
          "Proof that data quality improves reliability",
        ],
        redPath:
          "Map the system landscape, agree on ownership, and show how CODA deduplicates across SAP, Maximo, and CMMS feeds.",
        questions: [
          {
            id: "cio-1",
            text: "After a CMMS rollout flooded SAP with duplicates, how are you governing material masters across SAP, Maximo, and other CMMS instances?",
            options: [
              "Everything is governed centrally through SAP.",
              "We coordinate between SAP and Maximo but rely on people to keep them in sync.",
              "Each site handles its own masters with little coordination.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Central governance is strong. CODA can plug in to enforce standards and block duplicates before they spread.",
              weak: "Human syncing creates drift. Offer CODA to automate cross-system checks and keep catalogs aligned.",
              bad: "Decentralization breeds duplication. Use this to justify a controlled hub powered by CODA.",
            },
          },
          {
            id: "cio-2",
            text: "Who approves new master data and ensures attributes are consistent?",
            options: [
              "We have a clear RACI with IT owning standards and the business validating content.",
              "Ownership is shared, but it depends on who is available that week.",
              "There is no defined owner; it just happens during projects.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great. CODA can codify that RACI and provide the workflow evidence leadership expects.",
              weak: "Ad-hoc ownership risks drift. Position CODA to standardize approvals and SLA tracking.",
              bad: "No ownership means chaos. CODA brings a governed flow that will not slow delivery.",
            },
          },
          {
            id: "cio-3",
            text: "How do you detect and resolve duplicates before they hit downstream systems?",
            options: [
              "We run automated validations at creation with clear exception handling.",
              "We rely on periodic cleanups or user reports to find duplicates.",
              "We rarely detect them—it is not a priority.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can amplify that automation and give IT confidence that integrations stay clean.",
              weak: "Periodic cleanups leave leakage. CODA adds continuous checks with low effort.",
              bad: "Lack of priority equals hidden risk. Use CODA to show quick wins without heavy lift.",
            },
          },
        ],
      },
      {
        id: "opsMaintenanceHead",
        name: "Operations / Maintenance Head",
        personaName: "Caleb Drummond",
        company: "HelioVista Energy",
        role: "Keeps production reliable across plants and turnarounds.",
        shortDescription:
          "Needs accurate materials and vendor data so crews can execute safely without delays or excess buffers.",
        focusAreas: [
          "First-time-right job execution",
          "BOM integrity across sites",
          "Safety stock calibrated to real specs",
        ],
        redPath:
          "Connect misaligned descriptions to downtime risk, then show CODA keeping BOMs synchronized and buffers lean.",
        questions: [
          {
            id: "ops-1",
            text: "A maintenance leader avoided a shutdown by fixing item descriptions early—how do you keep crews confident the part they pick matches the work order?",
            options: [
              "Supervisors rely on tribal knowledge and photos in chat groups to confirm parts.",
              "We run a standardized catalog that enforces descriptions before anything is issued.",
              "Technicians swap parts if they look close enough and deal with issues later.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Standardized catalogs pair perfectly with CODA's governed descriptions to keep jobs first-time-right.",
              weak: "Tribal knowledge is fragile. CODA can capture that detail and standardize it across shifts.",
              bad: "Swapping parts risks safety and downtime. Position CODA as the guardrail that prevents mismatches.",
            },
          },
          {
            id: "ops-2",
            text: "What happens when a bill of materials includes a material ID that no longer exists?",
            options: [
              "Work stops while planners scramble to find an alternative.",
              "We have an automated cross-reference process that points to the right replacement.",
              "It rarely happens, so we ignore it unless a shutdown is near.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Great baseline. CODA can enrich replacements faster and keep BOMs aligned as vendors change.",
              weak: "Scramble time is the pain. Quantify delays and show how CODA keeps BOMs synchronized.",
              bad: "Ignoring broken IDs risks outage delays. Use this to stress proactive data quality before turnarounds.",
            },
          },
          {
            id: "ops-3",
            text: "How do you decide the right safety stock when specs differ slightly across plants?",
            options: [
              "We set conservative levels because we don’t fully trust the descriptions.",
              "We normalize specs and share one source of truth, so buffers stay lean.",
              "Each plant picks its own policy, and we revisit it every few years.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Lean buffers with shared specs aligns with CODA's normalization. Build on this to tighten turnarounds.",
              weak: "Conservative stock is costly. CODA's deduplication can cut buffers without risking uptime.",
              bad: "Infrequent reviews hide risk. Offer CODA as a continuous guardrail for spec drift.",
            },
          },
        ],
      },
      {
        id: "plantManager",
        name: "Plant Manager / Site Manager",
        personaName: "Monica Reyes",
        company: "HelioVista Energy",
        role: "Delivers uptime targets across production lines and shifts.",
        shortDescription:
          "Wants trusted data so outages aren't extended by wrong picks, missing parts, or reliance on one expert.",
        focusAreas: [
          "Uptime and schedule adherence",
          "Reducing reliance on tribal knowledge",
          "Confidence in stock availability",
        ],
        redPath:
          "Tie master-data reliability to downtime avoidance, then show CODA reducing dependency on a few veterans.",
        questions: [
          {
            id: "plant-1",
            text: "A peer plant manager cut outage time by trusting the catalog over tribal knowledge—when you plan maintenance, does your team rely on system data or on experience?",
            options: [
              "The system is trusted for planning and picking.",
              "We mix system data with tribal knowledge depending on the shift.",
              "Mostly experience—system data isn’t reliable enough.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great. CODA can keep that trust high by preventing spec drift across sites.",
              weak: "Mixing signals risk. CODA can capture expert nuance and standardize it for everyone.",
              bad: "Experience-only is fragile. Position CODA as the way to protect uptime when key people are out.",
            },
          },
          {
            id: "plant-2",
            text: "How often does missing or unclear material data extend a planned outage?",
            options: [
              "Rarely—we validate BOMs ahead of time.",
              "Occasionally, we scramble for substitutes during the window.",
              "It happens a lot; we improvise on the fly.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Proactive validation is strong. CODA can automate those checks and keep outages on track.",
              weak: "Scrambling is costly. Use CODA to pre-approve alternates and cut outage risk.",
              bad: "Frequent improvisation screams risk. CODA enforces clarity so windows stay on schedule.",
            },
          },
          {
            id: "plant-3",
            text: "What backup do you have when key planners or storeroom leads are unavailable?",
            options: [
              "Standard playbooks and clean masters so anyone can step in.",
              "Some guides exist, but we depend on a few people for tricky parts.",
              "No backup—we wait for them to return.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Playbooks plus CODA keep operations resilient and reduce single points of failure.",
              weak: "Partial coverage is risky. CODA can encode those tricky details into standards everyone follows.",
              bad: "Waiting stalls production. Position CODA as the safety net for continuity.",
            },
          },
        ],
      },
      {
        id: "engineeringHead",
        name: "Engineering / Asset Integrity Head",
        personaName: "Darius O'Neill",
        company: "HelioVista Energy",
        role: "Protects asset reliability and compliance across the fleet.",
        shortDescription:
          "Needs BOMs and asset registers to stay synchronized so failures aren't caused by wrong specs or missing lineage.",
        focusAreas: [
          "Centralized and consistent asset data",
          "BOM accuracy and revision control",
          "Reducing failure risk from spec mismatch",
        ],
        redPath:
          "Start with data standardization across sites, then offer a focused validation on a critical asset class.",
        questions: [
          {
            id: "eng-1",
            text: "After an audit flagged multiple asset registers at a peer, do you maintain one centralized register or does each site manage its own version?",
            options: [
              "Centralized with clear standards and approvals.",
              "Partly centralized—sites have some autonomy.",
              "Each site runs its own register without alignment.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Centralization is a strong base. CODA can keep specs synchronized and audit-ready.",
              weak: "Partial control invites drift. CODA aligns site data with engineering standards automatically.",
              bad: "Site-by-site control risks failures. Use CODA to harmonize and enforce standards quickly.",
            },
          },
          {
            id: "eng-2",
            text: "How do you verify that BOMs match the actual installed equipment?",
            options: [
              "Regular reconciliations and governed change control.",
              "Periodic reviews when time allows.",
              "We assume BOMs are right unless there is a problem.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Governed change control pairs well with CODA to keep BOMs validated as vendors change.",
              weak: "Ad-hoc reviews miss issues. CODA provides continuous checks and recommendations.",
              bad: "Assumptions hide risk. CODA can surface mismatches before they cause downtime.",
            },
          },
          {
            id: "eng-3",
            text: "When specs differ across sites, how do you decide which standard wins?",
            options: [
              "We harmonize to a corporate standard and document the rationale.",
              "We debate case by case depending on who leads the project.",
              "We let each site run their own specs if it works for them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Harmonization is ideal. CODA keeps that decision visible and prevents drift.",
              weak: "Case-by-case decisions slow you down. CODA gives data to accelerate consensus.",
              bad: "Site autonomy dilutes integrity. CODA enforces the chosen standard across the fleet.",
            },
          },
        ],
      },
      {
        id: "inventoryController",
        name: "Inventory Controller / Warehouse Manager",
        personaName: "Lena Grigori",
        company: "HelioVista Energy",
        role: "Manages inventory accuracy, space, and issuing discipline.",
        shortDescription:
          "Needs clean, deduplicated stock data so bins are trusted, slow movers shrink, and audits stay clean.",
        focusAreas: [
          "Cycle-count accuracy and audit readiness",
          "Duplicate detection across bins and sites",
          "Reducing slow movers and excess stock",
        ],
        redPath:
          "Quantify duplicate and non-moving stock, then prove CODA keeps receipts, barcodes, and descriptions aligned.",
        questions: [
          {
            id: "wh-1",
            text: "A warehouse lead recently found hidden cash in duplicate bins—how often do you discover duplicate materials across bins or sites?",
            options: [
              "Monthly cycle counts expose duplicates we then merge manually.",
              "Rarely, because our master data and barcodes are consistent.",
              "We only catch duplicates when auditors or planners complain.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Consistency is a strength. CODA can keep it that way as new vendors and parts enter the catalog.",
              weak: "Manual merges cost time. CODA can automate deduping so counts stay trustworthy.",
              bad: "Reactive discovery is risky. Position CODA as the proactive net that catches issues before audits.",
            },
          },
          {
            id: "wh-2",
            text: "What drives excess stock in your warehouses?",
            options: [
              "Unclear descriptions lead buyers to order items we already own.",
              "We intentionally overbuy to avoid stockouts during outages.",
              "Suppliers ship alternates we did not approve and we shelve them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great opening. CODA's standardized descriptions can prevent reorders and shrink slow movers quickly.",
              weak: "Overbuying is understandable. Show how CODA lowers risk so buffers can safely shrink.",
              bad: "Unapproved alternates highlight control gaps. CODA's governance can block bad receipts.",
            },
          },
          {
            id: "wh-3",
            text: "How do you keep auditors confident your on-hand balances are real?",
            options: [
              "We reconcile weekly and correct mismatches by hand.",
              "Our system prevents mismatches because every item is validated at receipt.",
              "We rely on the annual audit to true-up records.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Preventive controls pair well with CODA's validations to keep records clean without heavy effort.",
              weak: "Manual corrections are expensive. CODA can automate validation and surface mismatches sooner.",
              bad: "Annual cleanups hide problems. CODA brings continuous accuracy so audits are boring.",
            },
          },
        ],
      },
      {
        id: "procurementHead",
        name: "Procurement / Supply Chain Head",
        personaName: "Hector Valdez",
        company: "HelioVista Energy",
        role: "Secures materials at the right cost, quality, and speed.",
        shortDescription:
          "Needs standardized specs to negotiate confidently, avoid maverick spend, and enable supplier consolidation.",
        focusAreas: [
          "Duplicate prevention during sourcing",
          "Speed to RFQ with complete specs",
          "Supplier consolidation based on normalized spend",
        ],
        redPath:
          "Anchor on savings leakage from duplicates, then show CODA accelerating intake and enabling supplier rationalization.",
        questions: [
          {
            id: "proc-1",
            text: "A supply-chain head stopped a costly duplicate-order leak last quarter—how do you avoid buying the same part under multiple descriptions or vendors?",
            options: [
              "We rely on buyer experience to spot duplicates during PO creation.",
              "We have a governed catalog that blocks duplicates before requisitions are approved.",
              "We do not worry much—vendors usually correct us if we order wrong.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Governed catalogs align with CODA's strengths. Position rapid onboarding of vendor data to keep it current.",
              weak: "Human checks miss patterns. CODA can surface duplicates instantly so savings aren't left on the table.",
              bad: "Relying on vendors risks price creep. CODA gives procurement control and leverage.",
            },
          },
          {
            id: "proc-2",
            text: "What slows down sourcing when engineering requests a new material?",
            options: [
              "Specs are unclear, so we email back and forth before going to market.",
              "We already have a template that requires standard attributes up front.",
              "We place a quick order with the usual vendor to save time.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Templates are a solid base. CODA can prefill attributes and validate against existing items to go faster.",
              weak: "Email loops are costly. Show how CODA structures the intake and proposes matches automatically.",
              bad: "Defaulting to the usual vendor hides options. Use CODA to encourage competitive sourcing with clean data.",
            },
          },
          {
            id: "proc-3",
            text: "How do you decide which suppliers to consolidate or negotiate with first?",
            options: [
              "We analyze normalized spend by category and spec to find overlap.",
              "We pick the highest spend vendors regardless of category.",
              "We negotiate when contracts come up, without deep analysis.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Normalized spend is ideal. CODA's standardized specs give you the confidence to consolidate aggressively.",
              weak: "High spend is a start, but CODA can reveal hidden overlaps that make negotiations stronger.",
              bad: "Waiting for renewals leaves value on the table. CODA enables proactive category strategies.",
            },
          },
        ],
      },
      {
        id: "categoryManager",
        name: "Category Manager / Strategic Sourcing",
        personaName: "Tessa Bloom",
        company: "HelioVista Energy",
        role: "Owns category strategy, supplier rationalization, and savings targets.",
        shortDescription:
          "Wants harmonized supplier and material data so price comparisons are fair and savings are defensible.",
        focusAreas: [
          "Price variance across sites for identical items",
          "Centralized supplier and material standards",
          "Proof points for savings and negotiations",
        ],
        redPath:
          "Uncover fragmented supplier pricing, then use CODA to normalize specs and expose consolidation opportunities.",
        questions: [
          {
            id: "cat-1",
            text: "To win better terms, a sourcing peer centralized specs across vendors—do you maintain centralized supplier and material data for your category?",
            options: [
              "Yes—one governed catalog across sites.",
              "Partly—we centralize top spend but some sites keep local lists.",
              "No, each site manages its own suppliers and item data.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Centralization gives leverage. CODA can keep it clean and highlight overlap for faster negotiations.",
              weak: "Partial control hides leakage. CODA will normalize remaining items to reveal savings.",
              bad: "Decentralized data hurts strategy. Position CODA as the hub that creates a single sourcing view.",
            },
          },
          {
            id: "cat-2",
            text: "How do you check if suppliers offer different prices for the same item across sites?",
            options: [
              "We compare normalized specs and price files regularly.",
              "We review a few key items manually when renewing contracts.",
              "We rely on sites to negotiate locally and assume it is optimized.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Excellent. CODA can automate those comparisons and surface hidden variances instantly.",
              weak: "Manual spot checks miss value. CODA scales the analysis across the catalog.",
              bad: "Assuming optimization leaves savings on the table. Use CODA to prove the gap quickly.",
            },
          },
          {
            id: "cat-3",
            text: "When you build a negotiation pack, how confident are you in the underlying specs?",
            options: [
              "Very confident—attributes are standardized and audited.",
              "Somewhat—we clean them before major events.",
              "Not confident—we rely on supplier quotes to figure it out.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great. CODA keeps specs audit-ready so negotiation packs stay credible.",
              weak: "Pre-event cleanup is slow. CODA keeps specs clean continuously so you negotiate faster.",
              bad: "Relying on suppliers erodes leverage. Position CODA as the data backbone for tough negotiations.",
            },
          },
        ],
      },
      {
        id: "digitalLead",
        name: "Digital Transformation Lead",
        personaName: "Ivy Carrow",
        company: "HelioVista Energy",
        role: "Drives automation, IoT, and analytics programs that rely on clean data.",
        shortDescription:
          "Links digital success to standardized master data so initiatives do not stall from inconsistent records.",
        focusAreas: [
          "Data readiness for digital and automation use cases",
          "Cross-site standards that enable scaling",
          "Governed corrections when gaps appear",
        ],
        redPath:
          "Connect failed digital projects to data quality, then propose a readiness check on a high-visibility use case.",
        questions: [
          {
            id: "dig-1",
            text: "After a predictive maintenance pilot failed from bad masters, how do you ensure digital and automation initiatives are backed by clean, standardized data?",
            options: [
              "We embed data quality checks into every initiative.",
              "We try, but standards vary by site.",
              "We assume IT handles it behind the scenes.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Strong discipline. CODA can accelerate those checks and keep standards enforced as you scale.",
              weak: "Variation by site is common. CODA harmonizes standards so use cases scale consistently.",
              bad: "Assumptions stall programs. Position CODA as the data readiness layer for your roadmap.",
            },
          },
          {
            id: "dig-2",
            text: "Do differences in naming or classification slow down rolling a use case across multiple plants?",
            options: [
              "No—we maintain consistent taxonomies everywhere.",
              "Sometimes—we adjust mappings when we find issues.",
              "Yes—each rollout needs custom work to map the data.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Consistency is gold. CODA keeps that taxonomy synchronized as new data arrives.",
              weak: "Manual mapping wastes time. CODA automates harmonization so rollouts stay fast.",
              bad: "Custom work per site kills scale. CODA standardizes the data fabric to unblock deployments.",
            },
          },
          {
            id: "dig-3",
            text: "What signal tells you a use case is at risk because of data quality?",
            options: [
              "Leading indicators like rising exceptions or model drift.",
              "We notice when users complain about bad suggestions.",
              "We do not track it—the team just fixes issues as they appear.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great. CODA can feed those indicators with real-time quality metrics tied to the use case.",
              weak: "User complaints are lagging. CODA surfaces quality risk before adoption drops.",
              bad: "No signal equals surprises. CODA establishes the monitoring layer you need to scale.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    description:
      "Regulated grid and generation operators balancing reliability with modernization.",
    personas: [
      {
        id: "utilityExec",
        name: "COO / CFO",
        personaName: "Mara Kingsley",
        company: "Northwind Grid Co.",
        role: "Owns grid reliability, rate cases, and capital efficiency.",
        shortDescription:
          "Needs defensible data for rate cases and capital plans while keeping inventory lean across depots.",
        focusAreas: [
          "Evidence for regulatory filings",
          "Working-capital release without reliability risk",
          "Cross-site consistency for audits",
        ],
        redPath:
          "Tie duplicate materials to rate impacts, prove how CODA maintains auditable masters, and scope a pilot on a critical asset class.",
        questions: [
          {
            id: "util-exec-1",
            text: "A fellow COO secured a rate win by proving duplicate inventory costs—how do you quantify spare-parts carrying cost when filing a rate case?",
            options: [
              "Finance estimates based on prior-year reserves and carry a buffer for uncertainty.",
              "We track live duplication rates and capitalize only what’s trusted.",
              "We defer to engineering’s judgment and true-up annually.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Great—CODA can feed those live rates with audit-ready lineage to strengthen the filing.",
              weak: "Buffers hide cash. Use CODA to replace estimates with data-backed visibility before the next filing.",
              bad: "Annual true-ups risk regulator pushback. Position CODA as the control that keeps capital plans defensible.",
            },
          },
          {
            id: "util-exec-2",
            text: "When regulators question asset data, what evidence do you present?",
            options: [
              "Governed masters with approvals and change history.",
              "Manual spreadsheets compiled before the hearing.",
              "We rely on OEM docs and hope they suffice.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Perfect fit. CODA can centralize that history and keep it ready for discovery.",
              weak: "Manual prep is risky. CODA reduces scramble time and increases confidence.",
              bad: "OEM docs alone won’t fly. Use CODA to show proactive governance.",
            },
          },
          {
            id: "util-exec-3",
            text: "What would make you greenlight a 4-week master-data pilot?",
            options: [
              "Proof of cash release plus a roadmap to embed governance in capital projects.",
              "A few quality reports to share with the board.",
              "Demonstrating integration with the outage management system.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Align the pilot to cash and governance outcomes, then map CODA outputs directly to capital planning.",
              weak: "Reports alone won’t shift budgets. Anchor on measurable release and compliance strength.",
              bad: "Integrations help, but lead with financial and regulatory wins.",
            },
          },
        ],
      },
      {
        id: "gridOps",
        name: "Grid Operations Director",
        personaName: "Owen Talbot",
        company: "Northwind Grid Co.",
        role: "Keeps grid uptime high and crews safe during outages and storms.",
        shortDescription:
          "Needs accurate materials and configurations so field crews install the right components the first time.",
        focusAreas: [
          "First-time-right dispatch",
          "Storm stock accuracy",
          "Work package clarity",
        ],
        redPath:
          "Link bad descriptions to truck-roll risk, then show CODA keeping BOMs and compatible parts aligned across depots.",
        questions: [
          {
            id: "grid-1",
            text: "After a storm response, a director avoided repeat truck rolls by tightening item data—how do you ensure a crew picks the right transformer or switch on the first visit?",
            options: [
              "Supervisors rely on photos and tribal knowledge during dispatch.",
              "We enforce standardized descriptions and compatible parts lists in the work order.",
              "We send multiple options on the truck to be safe.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "CODA reinforces those standards and prevents drift as suppliers change.",
              weak: "Tribal knowledge is fragile. CODA can codify it so every crew benefits.",
              bad: "Overstocking trucks is costly. CODA keeps picks precise and efficient.",
            },
          },
          {
            id: "grid-2",
            text: "When a BOM references an obsolete part, what happens?",
            options: [
              "Dispatch pauses while planners hunt for a replacement.",
              "We have automated cross-references that point to approved alternates.",
              "Crews improvise in the field if they can.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "CODA can keep those alternates current so crews move fast with confidence.",
              weak: "Hunting wastes time. CODA synchronizes BOMs and alternates automatically.",
              bad: "Improvisation creates risk. Use CODA to enforce safe, approved choices.",
            },
          },
          {
            id: "grid-3",
            text: "How do you decide storm stock levels across service centers?",
            options: [
              "We overstock because specs differ and we can’t be sure.",
              "We harmonize specs and run a single safety-stock model.",
              "Each center guesses based on history.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Harmonized specs pair with CODA to keep buffers lean without risking uptime.",
              weak: "Overstocking is costly. CODA’s deduplication shrinks buffers safely.",
              bad: "Guesswork hides risk. CODA provides a governed baseline to plan from.",
            },
          },
        ],
      },
      {
        id: "supplyLead",
        name: "Supply Chain / SCM",
        personaName: "Janelle Farrow",
        company: "Northwind Grid Co.",
        role: "Secures materials and services while meeting rate and service goals.",
        shortDescription:
          "Wants standardized specs to consolidate suppliers, speed RFQs, and avoid maverick spend during outages.",
        focusAreas: [
          "Duplicate prevention in sourcing",
          "Faster RFQs with complete specs",
          "Supplier consolidation by normalized spend",
        ],
        redPath:
          "Quantify savings leakage from duplicates and show CODA accelerating emergency and planned sourcing with clean specs.",
        questions: [
          {
            id: "util-scm-1",
            text: "A utility supply-chain lead shaved millions by eliminating duplicate vendor names—how do you prevent buying the same part under multiple vendor names?",
            options: [
              "Buyers rely on experience during PO creation.",
              "Our governed catalog blocks duplicates before approval.",
              "We assume vendors will correct us if we order wrong.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "CODA keeps that catalog current with vendor data so duplicates stay out.",
              weak: "Human checks miss patterns. CODA surfaces overlaps instantly.",
              bad: "Relying on vendors erodes leverage. CODA restores control.",
            },
          },
          {
            id: "util-scm-2",
            text: "What slows you down when engineering requests a new component?",
            options: [
              "Specs are unclear so we email back and forth.",
              "We require standard attributes upfront.",
              "We default to the usual vendor to save time.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "CODA can prefill and validate attributes to speed intake further.",
              weak: "Email loops cost time. CODA structures the intake and proposes matches.",
              bad: "Defaulting to one vendor hides value. CODA enables competitive sourcing fast.",
            },
          },
          {
            id: "util-scm-3",
            text: "How do you decide which suppliers to consolidate first?",
            options: [
              "We analyze normalized spend by category and spec.",
              "We pick the highest spend vendors overall.",
              "We wait for contract renewals without deep analysis.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA feeds that normalization so you can negotiate confidently.",
              weak: "High spend is a start; CODA reveals hidden overlaps.",
              bad: "Waiting leaves money on the table. CODA enables proactive strategy.",
            },
          },
        ],
      },
      {
        id: "assetEngineer",
        name: "Asset Engineering",
        personaName: "Rishi Menon",
        company: "Northwind Grid Co.",
        role: "Owns asset standards, compatibility, and reliability across the fleet.",
        shortDescription:
          "Needs BOMs and asset registers synchronized so failures aren’t caused by mismatched specs or lineage gaps.",
        focusAreas: [
          "Centralized asset standards",
          "BOM accuracy and revision control",
          "Failure risk reduction",
        ],
        redPath:
          "Start with data standardization across regions, then validate a critical asset class with CODA’s recommendations.",
        questions: [
          {
            id: "util-eng-1",
            text: "When regulators asked for lineage, a peer had to reconcile multiple registers—do you keep one asset register or do regions manage their own?",
            options: [
              "Centralized with clear standards.",
              "Partly centralized—regions have autonomy.",
              "Each region runs its own register.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that register synchronized with material masters.",
              weak: "Partial control risks drift. CODA standardizes remaining regions quickly.",
              bad: "Decentralization increases failure risk. CODA creates a governed baseline.",
            },
          },
          {
            id: "util-eng-2",
            text: "How do you keep BOMs synchronized when suppliers change?",
            options: [
              "Periodic reconciliations with engineering oversight.",
              "Project teams update BOMs when they remember.",
              "We assume BOMs are correct unless something fails.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can automate validations and recommendations between cycles.",
              weak: "Ad-hoc updates miss issues. CODA provides continuous checks.",
              bad: "Assumptions hide risk. CODA surfaces mismatches early.",
            },
          },
          {
            id: "util-eng-3",
            text: "When standards differ by region, how do you pick the winner?",
            options: [
              "We harmonize to a corporate standard with documented rationale.",
              "We decide case by case depending on the project lead.",
              "We let each region run what works for them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that decision visible and prevents drift.",
              weak: "Case-by-case slows you down. CODA accelerates consensus with data.",
              bad: "Autonomy dilutes integrity. CODA enforces the chosen standard.",
            },
          },
        ],
      },
      {
        id: "digitalUtility",
        name: "Digital Transformation Lead",
        personaName: "Noor Calder",
        company: "Northwind Grid Co.",
        role: "Drives grid automation, analytics, and workforce tools.",
        shortDescription:
          "Links digital success to standardized master data so initiatives don’t stall from inconsistent records.",
        focusAreas: [
          "Data readiness for automation/AMI",
          "Reliable master data powering analytics",
          "Change adoption across districts",
        ],
        redPath:
          "Show how CODA cleanses data to unblock automation releases, then co-design a proof for a priority program.",
        questions: [
          {
            id: "util-dig-1",
            text: "After a grid automation pilot stalled on messy masters, which digital programs struggle most because of data quality?",
            options: [
              "Grid automation and outage analytics.",
              "Procurement visibility across regions.",
              "We don’t have data quality issues slowing us down.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Great—tie CODA cleansing directly to automation and reliability wins.",
              weak: "Visibility matters, but connect it back to digital KPIs.",
              bad: "Issues surface later. Use CODA to prove readiness before scaling.",
            },
          },
          {
            id: "util-dig-2",
            text: "How do you measure data quality progress across initiatives?",
            options: [
              "We track completeness, duplicates, and error rates per system.",
              "We spot-check when projects fail tests.",
              "We rely on vendor SLAs instead of measuring.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can feed those metrics and keep them moving in the right direction.",
              weak: "Spot checks are reactive. Offer a CODA dashboard to make progress visible.",
              bad: "SLAs alone hide risk. CODA provides transparency and control.",
            },
          },
          {
            id: "util-dig-3",
            text: "What does success look like for your next automation release?",
            options: [
              "Higher adoption and trusted dashboards for crews.",
              "Shipping on time even if data fidelity lags.",
              "Just proving the technology works in a demo.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Map CODA outputs to adoption and trust so the release lands.",
              weak: "Timelines matter, but CODA helps ship with quality intact.",
              bad: "Demos alone don’t stick. Use CODA to ensure production readiness.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Discrete production with multi-site plants and complex supplier networks.",
    personas: [
      {
        id: "mfgExec",
        name: "VP Operations / CFO",
        personaName: "Damon Kessler",
        company: "Asterline Manufacturing",
        role: "Owns throughput, cost, and capital effectiveness across plants.",
        shortDescription:
          "Needs trustworthy data to cut working capital while keeping production schedules predictable.",
        focusAreas: [
          "Working-capital release",
          "Schedule adherence",
          "Cross-plant visibility",
        ],
        redPath:
          "Quantify duplicate-driven cash leakage, link cleansed masters to schedule adherence, and propose a pilot on a flagship line.",
        questions: [
          {
            id: "mfg-exec-1",
            text: "A manufacturing CFO released idle cash by exposing duplicate parts—how do you measure cash tied up in duplicate or obsolete parts across plants?",
            options: [
              "We have a live dashboard that flags duplicates and excess stock.",
              "Controllers estimate based on historical write-offs.",
              "We don’t measure; we carry extra to avoid downtime.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can feed that dashboard with governed data so cash release is clear.",
              weak: "Estimates are a start. CODA provides real duplication rates to refine them.",
              bad: "Carrying extra hides waste. CODA proves where buffers can shrink safely.",
            },
          },
          {
            id: "mfg-exec-2",
            text: "What evidence would you need to fund a 4-week pilot?",
            options: [
              "Forecasted cash release plus plan to scale across plants.",
              "A few reports showing data quality trends.",
              "Proof that planners accept another tool.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Map CODA outputs directly to that cash forecast and rollout plan.",
              weak: "Reports without financial linkage won’t unlock budget. Reframe toward measurable KPIs.",
              bad: "Tool tolerance is secondary. Lead with business outcomes.",
            },
          },
          {
            id: "mfg-exec-3",
            text: "When duplicate materials slip in, what hurts most?",
            options: [
              "Higher carrying costs and missed savings targets.",
              "Maintenance slows because techs can’t find the right part.",
              "No real impact—we just stock more to be safe.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Connect CODA’s deduplication to the KPIs leadership tracks.",
              weak: "Link maintenance friction back to cost and schedule to show impact.",
              bad: "Stocking more signals wasted cash. Use CODA to highlight reductions.",
            },
          },
        ],
      },
      {
        id: "mfgPlant",
        name: "Plant Manager",
        personaName: "Alicia Trent",
        company: "Asterline Manufacturing",
        role: "Delivers uptime and OEE targets for a production site.",
        shortDescription:
          "Needs trusted BOMs and stock data so outages aren’t extended by wrong picks or missing parts.",
        focusAreas: [
          "Uptime and schedule adherence",
          "Reducing reliance on tribal knowledge",
          "Confidence in stock availability",
        ],
        redPath:
          "Tie master-data reliability to downtime avoidance, then show CODA reducing dependency on a few veterans.",
        questions: [
          {
            id: "mfg-plant-1",
            text: "A peer plant manager shortened outages by trusting the catalog—when you plan maintenance, do teams trust system data or rely on experts?",
            options: [
              "System is trusted for planning and picking.",
              "We mix system data with tribal knowledge depending on the shift.",
              "Mostly experience—system data isn’t reliable enough.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that trust high by preventing spec drift across sites.",
              weak: "Mixing signals risk. CODA captures expert nuance and standardizes it.",
              bad: "Experience-only is fragile. CODA protects uptime when key people are out.",
            },
          },
          {
            id: "mfg-plant-2",
            text: "How often does unclear material data extend an outage?",
            options: [
              "Rarely—we validate BOMs ahead of time.",
              "Occasionally, we scramble for substitutes during the window.",
              "It happens a lot; we improvise on the fly.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can automate those checks and keep outages on track.",
              weak: "Scrambling is costly. CODA pre-approves alternates and cuts risk.",
              bad: "Frequent improvisation screams risk. CODA enforces clarity so windows stay on schedule.",
            },
          },
          {
            id: "mfg-plant-3",
            text: "What backup exists when key planners are unavailable?",
            options: [
              "Standard playbooks and clean masters so anyone can step in.",
              "Some guides exist, but we depend on a few people for tricky parts.",
              "No backup—we wait for them to return.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Playbooks plus CODA keep operations resilient and reduce single points of failure.",
              weak: "Partial coverage is risky. CODA encodes tricky details into standards everyone follows.",
              bad: "Waiting stalls production. CODA is the safety net for continuity.",
            },
          },
        ],
      },
      {
        id: "mfgProcurement",
        name: "Procurement Lead",
        personaName: "Victor Hanley",
        company: "Asterline Manufacturing",
        role: "Secures materials at the right cost, quality, and speed.",
        shortDescription:
          "Needs standardized specs to negotiate confidently, avoid maverick spend, and enable supplier consolidation.",
        focusAreas: [
          "Duplicate prevention during sourcing",
          "Speed to RFQ with complete specs",
          "Supplier consolidation based on normalized spend",
        ],
        redPath:
          "Anchor on savings leakage from duplicates, then show CODA accelerating intake and enabling supplier rationalization.",
        questions: [
          {
            id: "mfg-proc-1",
            text: "After harmonizing specs across plants, how do you avoid buying the same part under multiple descriptions?",
            options: [
              "Buyers spot duplicates during PO creation.",
              "Governed catalog blocks duplicates before requisitions are approved.",
              "We don’t worry—vendors correct us if we order wrong.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Governed catalogs align with CODA. Rapid vendor onboarding keeps it current.",
              weak: "Human checks miss patterns. CODA surfaces duplicates instantly.",
              bad: "Relying on vendors risks price creep. CODA gives procurement control.",
            },
          },
          {
            id: "mfg-proc-2",
            text: "What slows sourcing when engineering requests a new material?",
            options: [
              "Specs are unclear so we iterate over email.",
              "We use a template that requires standard attributes up front.",
              "We place a quick order with the usual vendor to save time.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Templates are solid. CODA can prefill and validate to go faster.",
              weak: "Email loops waste time. CODA structures intake and proposes matches automatically.",
              bad: "Defaulting to one vendor hides options. CODA encourages competitive sourcing with clean data.",
            },
          },
          {
            id: "mfg-proc-3",
            text: "How do you choose suppliers to consolidate first?",
            options: [
              "We analyze normalized spend and specs to find overlap.",
              "We pick highest spend vendors regardless of category.",
              "We negotiate only at renewal without deep analysis.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA’s standardized specs give confidence to consolidate aggressively.",
              weak: "High spend is a start; CODA reveals hidden overlaps.",
              bad: "Waiting leaves value. CODA enables proactive category strategies.",
            },
          },
        ],
      },
      {
        id: "mfgQuality",
        name: "Quality / Engineering",
        personaName: "Serena Valtas",
        company: "Asterline Manufacturing",
        role: "Protects product quality and compliance across lines.",
        shortDescription:
          "Needs harmonized specs and BOMs so variants stay controlled and recalls are traceable.",
        focusAreas: [
          "BOM integrity and revision control",
          "Spec harmonization across variants",
          "Traceability for audits",
        ],
        redPath:
          "Map inconsistent specs to quality risk, then show CODA enforcing harmonization and lineage across lines.",
        questions: [
          {
            id: "mfg-qual-1",
            text: "When a component change caused defects for a peer, how do you keep BOMs synchronized when components change?",
            options: [
              "We run governed change control with clear approvals.",
              "Project teams update BOMs when reminded.",
              "We assume BOMs are correct unless an audit flags an issue.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA strengthens that control and keeps alternates aligned.",
              weak: "Ad-hoc updates miss issues. CODA provides continuous validation.",
              bad: "Assumptions risk non-conformance. CODA surfaces mismatches early.",
            },
          },
          {
            id: "mfg-qual-2",
            text: "When plants use different specs for similar parts, how do you reconcile them?",
            options: [
              "We harmonize to a corporate standard and document why.",
              "We debate case by case depending on who leads the project.",
              "Each plant keeps its own spec if it works.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that decision visible and prevents drift across plants.",
              weak: "Case-by-case slows teams. CODA accelerates consensus with data.",
              bad: "Autonomy dilutes quality. CODA enforces the chosen standard.",
            },
          },
          {
            id: "mfg-qual-3",
            text: "How do you trace which spec version is in a shipped product?",
            options: [
              "Governed masters with history and approvals.",
              "We reconstruct from emails and change logs when needed.",
              "We don’t trace unless there is a major issue.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA provides the lineage and approvals to make traceability easy.",
              weak: "Reconstruction wastes time. CODA keeps the record ready for audits.",
              bad: "No traceability risks recalls. CODA establishes continuous evidence.",
            },
          },
        ],
      },
      {
        id: "mfgDigital",
        name: "Digital / Analytics Lead",
        personaName: "Jordan Pike",
        company: "Asterline Manufacturing",
        role: "Delivers analytics, IoT, and automation tied to production outcomes.",
        shortDescription:
          "Links digital success to standardized master data so initiatives don’t stall from inconsistent records.",
        focusAreas: [
          "Reliable master data powering analytics",
          "Data readiness for automation",
          "Change adoption across plants",
        ],
        redPath:
          "Show how CODA cleanses and standardizes data to unblock digital initiatives, then co-design a proof for a priority line.",
        questions: [
          {
            id: "mfg-dig-1",
            text: "A predictive-maintenance model at a peer failed on bad masters—which digital programs struggle because of data quality?",
            options: [
              "Predictive maintenance and OEE analytics.",
              "Procurement visibility across plants.",
              "We don’t have data quality issues slowing us down.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Tie CODA cleansing directly to predictive maintenance wins.",
              weak: "Visibility matters, but connect it back to digital KPIs.",
              bad: "Hidden issues surface later. Use CODA to prove readiness before scaling.",
            },
          },
          {
            id: "mfg-dig-2",
            text: "How do you measure whether data quality is improving?",
            options: [
              "We track completeness, duplicates, and error rates per system.",
              "We spot-check when projects fail tests.",
              "We rely on vendor SLAs.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can feed those metrics and keep them moving in the right direction.",
              weak: "Spot checks are reactive. Offer a CODA dashboard to make progress visible.",
              bad: "Relying on SLAs hides risk. CODA provides transparency and control.",
            },
          },
          {
            id: "mfg-dig-3",
            text: "What does success look like for your next release?",
            options: [
              "Higher adoption and trusted dashboards for planners.",
              "Delivering on time even if data fidelity lags.",
              "Just proving the technology works in a demo.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Map CODA outputs to adoption and trust so the release lands.",
              weak: "Timelines matter, but CODA can help you ship with quality intact.",
              bad: "Demos alone don’t stick. Use CODA to ensure production readiness.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    description:
      "Hospital networks, labs, and device makers where accuracy and compliance are critical.",
    personas: [
      {
        id: "hcCdo",
        name: "Chief Data Officer / CMIO",
        personaName: "Dr. Liana Mercer",
        company: "Novella Health Network",
        role: "Owns data quality, interoperability, and clinical decision support readiness.",
        shortDescription:
          "Needs standardized masters so EHR, ERP, and clinical systems agree, avoiding safety and reporting risk.",
        focusAreas: [
          "Interoperability across EHR, ERP, and lab systems",
          "Data quality for safety and compliance",
          "Evidence for funding digital programs",
        ],
        redPath:
          "Link clean masters to patient safety, report accuracy, and evidence for digital health programs; propose a governed pilot on a high-volume service line.",
        questions: [
          {
            id: "hc-cdo-1",
            text: "After a recall exposed mismatched records, how do you keep item and supplier masters aligned across EHR, ERP, and inventory systems?",
            options: [
              "We run a governed hub that validates attributes and codes before changes propagate.",
              "We have periodic reconciliations but rely on teams to fix mismatches ad hoc.",
              "Each system owns its own masters; we fix issues when clinicians complain.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can plug into that hub to harden validations and keep codes consistent across systems.",
              weak: "Reconciliations leave gaps. CODA automates cross-system checks so teams spend less time firefighting.",
              bad: "Reactive fixes risk safety. Position CODA as the guardrail that prevents mismatches before they hit clinicians.",
            },
          },
          {
            id: "hc-cdo-2",
            text: "When regulators audit clinical or supply data, what evidence do you present?",
            options: [
              "Traceable approvals with audit trails across systems.",
              "Screenshots and shared spreadsheets from recent reconciliations.",
              "We rely on vendor attestations and hope systems agree.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Traceability pairs with CODA’s lineage so audits are faster and cleaner.",
              weak: "Manual evidence is brittle. CODA provides governed history to reduce audit prep time.",
              bad: "Hoping systems agree is risky. Use CODA to prove compliance with minimal effort.",
            },
          },
          {
            id: "hc-cdo-3",
            text: "What would you need to see in a 4-week pilot to fund broader rollout?",
            options: [
              "Clear reduction in duplicate items plus cleaner reporting for a key service line.",
              "Some dashboards that track data quality over time.",
              "Proof clinicians won’t mind another governance step.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Lead with measurable duplication cuts and reporting lift; CODA can deliver that quickly.",
              weak: "Dashboards without outcomes won’t unlock budget. Tie metrics to safety and compliance.",
              bad: "Adoption matters, but funding follows outcomes. Keep the focus on safety and auditability.",
            },
          },
        ],
      },
      {
        id: "hcSupply",
        name: "Supply Chain Director",
        personaName: "Evan Carlisle",
        company: "Novella Health Network",
        role: "Manages sourcing, contracts, and inventory across hospitals or labs.",
        shortDescription:
          "Wants consistent item masters and vendor data to negotiate confidently and prevent stockouts for clinicians.",
        focusAreas: [
          "Contract compliance and formulary control",
          "Avoiding duplicates and substitutions",
          "Trusted availability for clinicians",
        ],
        redPath:
          "Connect clean masters to contract compliance and surgeon satisfaction, then propose a pilot on a priority category (implants, lab reagents).",
        questions: [
          {
            id: "hc-supply-1",
            text: "A hospital supply chain lead cut waste by standardizing descriptions—how do you stop buying the same item under multiple descriptions or vendors?",
            options: [
              "A governed catalog blocks duplicates before requisitions are approved.",
              "Buyers rely on experience to catch overlaps during PO creation.",
              "We find issues later when invoices don’t match contracts.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA accelerates that control with faster vendor onboarding and duplicate prevention.",
              weak: "Human checks miss patterns. CODA surfaces overlaps instantly so savings stick.",
              bad: "Late discovery erodes margins. Position CODA as the early warning system.",
            },
          },
          {
            id: "hc-supply-2",
            text: "What slows sourcing when clinicians request new items?",
            options: [
              "Unclear specs trigger back-and-forth before we go to contract.",
              "We use a standard template with required attributes.",
              "We place quick orders with preferred vendors and reconcile later.",
            ],
            bestOptionIndex: 1,
            feedback: {
              best: "Templates are strong. CODA can prefill attributes and validate against current formulary to go faster.",
              weak: "CODA structures intake and proposes matches so sourcing isn’t slowed by email loops.",
              bad: "Ordering first invites leakage. CODA keeps contracts and specs tight from the start.",
            },
          },
          {
            id: "hc-supply-3",
            text: "How do you ensure substitutions or alternates don’t violate contracts or clinician preferences?",
            options: [
              "We track approved alternates with governed attributes and change control.",
              "We document alternates in shared spreadsheets when issues arise.",
              "We rely on vendors to suggest alternates and adjust afterward.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps those alternates synchronized and auditable across sites.",
              weak: "Spreadsheets drift. CODA centralizes alternates so compliance is consistent.",
              bad: "Vendor-led alternates risk non-compliance. CODA protects contracts and clinical trust.",
            },
          },
        ],
      },
      {
        id: "hcClinicalEng",
        name: "Clinical Engineering Director",
        personaName: "Priyanka Das",
        company: "Novella Health Network",
        role: "Maintains devices and assets to keep care safe and compliant.",
        shortDescription:
          "Needs accurate asset and part data so maintenance is first-time-right and recalls are handled fast.",
        focusAreas: [
          "Recall readiness and traceability",
          "BOM integrity for medical devices",
          "Reducing downtime in critical areas",
        ],
        redPath:
          "Tie normalized asset and part data to recall response and uptime, then pilot on a high-risk device family.",
        questions: [
          {
            id: "hc-eng-1",
            text: "When a recall hits, how quickly can you track which devices or parts are affected across your fleet?",
            options: [
              "We have a centralized register that maps assets to parts and vendors.",
              "We pull reports from multiple systems and reconcile manually.",
              "We check with technicians and vendors to piece it together.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA enriches that register and keeps lineage current so recalls are fast.",
              weak: "Manual reconciliation is slow. CODA links parts to assets automatically to cut response time.",
              bad: "Manual checks risk misses. CODA provides immediate traceability.",
            },
          },
          {
            id: "hc-eng-2",
            text: "How do you prevent mismatched parts from being used during maintenance?",
            options: [
              "Standardized descriptions and approvals before parts are issued.",
              "Supervisors rely on experience and photos to verify parts.",
              "We swap parts if they look close and adjust later if needed.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps those standards enforced and synced across systems.",
              weak: "Experience is fragile. CODA captures that detail and standardizes it.",
              bad: "Swapping risks safety. CODA blocks mismatches upfront.",
            },
          },
          {
            id: "hc-eng-3",
            text: "When specs differ across facilities, how do you decide the standard?",
            options: [
              "We harmonize to a corporate standard with documented rationale.",
              "We debate case by case depending on who leads the project.",
              "Each site runs its own specs if it works for them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA preserves that rationale and prevents drift across facilities.",
              weak: "Case-by-case slows you down. CODA gives data to accelerate consensus.",
              bad: "Site autonomy dilutes safety. CODA enforces the chosen standard.",
            },
          },
        ],
      },
      {
        id: "hcQuality",
        name: "Quality & Compliance Officer",
        personaName: "Malcolm Ivers",
        company: "Novella Health Network",
        role: "Ensures data supports regulatory reporting and patient safety.",
        shortDescription:
          "Needs evidence that masters are governed so audits, UDI, and safety reporting are reliable.",
        focusAreas: [
          "Audit-ready lineage and approvals",
          "UDI/IFU alignment across systems",
          "Reducing manual reconciliations",
        ],
        redPath:
          "Show how CODA enforces attributes and traceability for UDI and safety reporting, then co-design an audit pack pilot.",
        questions: [
          {
            id: "hc-quality-1",
            text: "During audits, what evidence do you provide to prove item masters meet UDI or labeling requirements?",
            options: [
              "Governed attributes with clear approval history.",
              "We keep spreadsheets and screenshots from recent updates.",
              "Vendors provide attestations and we trust them.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA centralizes those attributes and approvals so evidence is instant.",
              weak: "Spreadsheets are brittle. CODA makes lineage audit-ready.",
              bad: "Vendor attestations alone are risky. CODA provides internal proof.",
            },
          },
          {
            id: "hc-quality-2",
            text: "How do you monitor data quality across sites today?",
            options: [
              "We track completeness, duplicates, and errors per system.",
              "We spot-check when issues surface in audits or incidents.",
              "We rely on IT SLAs and assume they’re met.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA can feed those metrics and automate alerts to keep quality improving.",
              weak: "Reactive checks miss risk. CODA provides continuous monitoring and coaching.",
              bad: "Assumptions invite findings. CODA creates transparency and control.",
            },
          },
          {
            id: "hc-quality-3",
            text: "When auditors challenge balances or traceability, how quickly can you respond?",
            options: [
              "Within hours because approvals and lineage are centralized.",
              "It takes days of gathering evidence from multiple teams.",
              "We wait for vendors or IT to send what they have.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that speed by making lineage accessible and consistent.",
              weak: "Long prep time is costly. CODA cuts collection by keeping evidence ready.",
              bad: "Waiting on others is risky. CODA provides instant answers.",
            },
          },
        ],
      },
      {
        id: "hcDigital",
        name: "Digital Health Lead",
        personaName: "Ciara Velasquez",
        company: "Novella Health Network",
        role: "Drives analytics, automation, and virtual care programs.",
        shortDescription:
          "Links digital success to standardized master data so new programs aren’t blocked by inconsistent records.",
        focusAreas: [
          "Data readiness for AI/analytics",
          "Adoption by clinicians and operations",
          "Reliable integrations across platforms",
        ],
        redPath:
          "Show CODA as the quickest way to cleanse data feeding analytics or virtual care, then prove adoption in one program.",
        questions: [
          {
            id: "hc-dig-1",
            text: "A digital front-door pilot stalled on inconsistent masters—which digital programs are slowed most by data quality today?",
            options: [
              "Predictive analytics and virtual care reporting.",
              "Procurement visibility and spend analytics.",
              "We don’t have data quality issues slowing us down.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Tie CODA cleansing directly to those programs’ KPIs to justify investment.",
              weak: "Procurement matters—link it back to digital KPIs to keep alignment.",
              bad: "Issues surface later. CODA proves readiness before scaling.",
            },
          },
          {
            id: "hc-dig-2",
            text: "How do you measure data quality improvements across initiatives?",
            options: [
              "We track completeness, duplicates, and error rates with dashboards.",
              "We spot-check when projects fail tests.",
              "We rely on vendor SLAs for quality.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA feeds those dashboards and keeps metrics trending up.",
              weak: "Spot checks are reactive. CODA provides continuous monitoring.",
              bad: "SLAs alone hide risk. CODA gives transparency and control.",
            },
          },
          {
            id: "hc-dig-3",
            text: "What does success look like for your next release?",
            options: [
              "Higher adoption and trusted dashboards for clinicians.",
              "Shipping on time even if data fidelity lags.",
              "Just proving the technology works in a demo.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Map CODA outputs to adoption and trust so the release lands.",
              weak: "Timelines matter, but CODA keeps quality intact.",
              bad: "Demos alone don’t stick. Use CODA to ensure production readiness.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "retail",
    name: "Retail & eCommerce",
    description:
      "Omnichannel retail with distributed stores, DCs, and digital storefronts.",
    personas: [
      {
        id: "retailCoo",
        name: "COO / Merchandising Lead",
        personaName: "Nadia Holbrook",
        company: "Lumina Retail Collective",
        role: "Owns category profitability, availability, and experience across channels.",
        shortDescription:
          "Wants trusted product data to avoid missed sales, inflated inventory, and inconsistent customer experiences.",
        focusAreas: [
          "On-shelf and online availability",
          "Margin protection via clean assortments",
          "Consistent product experience across channels",
        ],
        redPath:
          "Quantify margin and availability hits from duplicate or inconsistent SKUs, then pilot CODA on a key category to prove uplift.",
        questions: [
          {
            id: "retail-coo-1",
            text: "After a returns spike from bad SKUs, how do you prevent duplicate or inconsistent SKUs across stores and eCommerce?",
            options: [
              "We govern attributes centrally and block duplicates before listings go live.",
              "We reconcile feeds weekly and fix issues as they appear.",
              "Each channel manages its own catalog; we clean up when customers complain.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA strengthens that control and accelerates onboarding for new products.",
              weak: "Weekly fixes leave leakage. CODA prevents duplicates before they hit shoppers.",
              bad: "Reactive cleanup hurts experience. Position CODA as the always-on guardrail.",
            },
          },
          {
            id: "retail-coo-2",
            text: "What slows down launching a new assortment or seasonal drop?",
            options: [
              "Gathering complete attributes and images from suppliers.",
              "We move fast; data gaps are filled later.",
              "Approval cycles for pricing take the longest.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA standardizes intake, enriches attributes, and prevents duplicate SKUs so launches stay on time.",
              weak: "Filling gaps later risks errors. CODA cleans data up front to protect the drop.",
              bad: "Pricing matters, but data integrity underpins confidence—CODA de-risks it.",
            },
          },
          {
            id: "retail-coo-3",
            text: "When SKUs drift across channels, what impact do you see first?",
            options: [
              "Lost sales or returns from wrong descriptions or images.",
              "Increased warehouse touches but customers don’t notice.",
              "No major impact—we correct it eventually.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Link CODA to revenue protection and reduced returns—fast justification for a pilot.",
              weak: "Ops pain still costs. Connect it to customer metrics to build urgency.",
              bad: "Complacency risks revenue. CODA prevents drift continuously.",
            },
          },
        ],
      },
      {
        id: "retailSupply",
        name: "Supply Chain & Logistics Director",
        personaName: "Felix Munroe",
        company: "Lumina Retail Collective",
        role: "Moves inventory efficiently across DCs, stores, and customers.",
        shortDescription:
          "Needs clean masters so replenishment, routing, and substitutions don’t create waste or delays.",
        focusAreas: [
          "Accurate replenishment and allocations",
          "Duplicate prevention in DCs and stores",
          "Better substitutions for online orders",
        ],
        redPath:
          "Connect data quality to delivery speed and waste reduction, then run a pilot on a high-volume region or DC.",
        questions: [
          {
            id: "retail-supply-1",
            text: "A logistics leader cut stockouts by standardizing SKUs—how do you keep replenishment signals accurate when SKUs vary by channel or region?",
            options: [
              "We normalize SKUs and locations in one governed master before planning.",
              "We adjust forecasts manually when we notice discrepancies.",
              "Each region manages its own codes; we reconcile during peak season.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps those masters synced automatically so planning stays accurate.",
              weak: "Manual adjustments are costly. CODA detects mismatches early.",
              bad: "Peak-only reconciliation is risky. CODA provides continuous alignment.",
            },
          },
          {
            id: "retail-supply-2",
            text: "When a customer item is unavailable, how do you choose substitutes?",
            options: [
              "We maintain approved substitutes with shared attributes across channels.",
              "Store teams pick alternatives based on experience.",
              "We let customers choose anything similar onsite or online.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA enriches and governs substitute relationships so promises are accurate.",
              weak: "Experience varies. CODA standardizes substitutes for consistent service.",
              bad: "Uncontrolled substitutions risk returns. CODA keeps it disciplined.",
            },
          },
          {
            id: "retail-supply-3",
            text: "How do you measure the cost of duplicate or mislabeled inventory across DCs?",
            options: [
              "We track duplication rates and carrying costs per DC.",
              "We review write-offs annually and adjust buffers.",
              "We don’t quantify it; we just add buffer stock.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA provides the data to shrink duplication and buffers confidently.",
              weak: "Annual reviews miss ongoing waste. CODA keeps the cost visible monthly.",
              bad: "Buffers hide waste. CODA proves where to reduce safely.",
            },
          },
        ],
      },
      {
        id: "retailEcom",
        name: "eCommerce / Digital Product Lead",
        personaName: "Zoe Hartigan",
        company: "Lumina Retail Collective",
        role: "Owns digital experience and conversion across web and mobile.",
        shortDescription:
          "Needs consistent product content so search, recommendations, and PDPs convert reliably.",
        focusAreas: [
          "Search and recommendation accuracy",
          "Speed to publish new products",
          "Content consistency across locales",
        ],
        redPath:
          "Show how CODA cleans and enriches content to lift conversion and reduce returns; pilot on one high-traffic category.",
        questions: [
          {
            id: "retail-ecom-1",
            text: "When analyzing returns, what data issues cause the most cart abandonment or product returns?",
            options: [
              "Inaccurate or incomplete product attributes and images.",
              "Delivery estimates can be off during promotions.",
              "Price changes not reflected everywhere.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA’s clean attributes and media governance directly reduce returns and abandonment.",
              weak: "Delivery matters, but attribute accuracy is the foundation—CODA can help there first.",
              bad: "Price sync is important; CODA still helps by standardizing masters feeding pricing.",
            },
          },
          {
            id: "retail-ecom-2",
            text: "How quickly can you launch a new vendor’s catalog online?",
            options: [
              "Within days because attributes and taxonomy are standardized.",
              "A couple of weeks—content cleanup takes time.",
              "It varies; we often copy what vendors provide and fix later.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA accelerates onboarding further by automating mapping and validation.",
              weak: "CODA can shrink those weeks by normalizing attributes automatically.",
              bad: "Copying invites errors. CODA cleans content before it hits the site.",
            },
          },
          {
            id: "retail-ecom-3",
            text: "How do you ensure translations or locale variations stay aligned?",
            options: [
              "We govern source attributes and localizations centrally.",
              "We rely on local teams to update when they notice issues.",
              "We don’t manage it closely; mismatches are rare.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA preserves source-of-truth attributes and keeps locales synchronized.",
              weak: "Local teams have limits. CODA keeps alignment without extra effort.",
              bad: "Assuming rarity risks CX. CODA provides continuous control.",
            },
          },
        ],
      },
      {
        id: "retailInventory",
        name: "Inventory Planning Manager",
        personaName: "Greta Linwood",
        company: "Lumina Retail Collective",
        role: "Plans demand and allocates stock across channels and stores.",
        shortDescription:
          "Needs reliable masters so forecasts, allocations, and substitutes don’t misfire.",
        focusAreas: [
          "Forecast accuracy",
          "Stock visibility across network",
          "Trusted substitutions",
        ],
        redPath:
          "Tie clean masters to forecast accuracy and allocation wins, then pilot CODA on a volatile category.",
        questions: [
          {
            id: "retail-inv-1",
            text: "A planner missed forecasts due to mismatched definitions—how do you keep forecasts accurate when item definitions differ by region or channel?",
            options: [
              "We harmonize item definitions before planning and track variants explicitly.",
              "We adjust forecasts manually when we notice variances.",
              "Each region plans independently with its own codes.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA maintains that harmony automatically so planners trust the signals.",
              weak: "Manual adjustments are costly. CODA highlights mismatches early.",
              bad: "Independent codes break visibility. CODA creates one view fast.",
            },
          },
          {
            id: "retail-inv-2",
            text: "When promotions change demand, how do you ensure substitutes don’t inflate returns?",
            options: [
              "We manage approved substitutes with matching attributes and track performance.",
              "Stores decide substitutes based on what’s available.",
              "We don’t manage substitutes closely.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA governs substitutes and ties them to outcomes, reducing return risk.",
              weak: "Local decisions vary. CODA standardizes substitutes for consistent results.",
              bad: "No management invites errors. CODA brings control quickly.",
            },
          },
          {
            id: "retail-inv-3",
            text: "How do you measure the cost of bad masters on forecast error or stockouts?",
            options: [
              "We quantify impact by category and adjust plans accordingly.",
              "We infer it from service levels but don’t isolate data quality.",
              "We don’t measure; we focus on moving inventory.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA feeds that measurement with real duplication and error rates.",
              weak: "CODA helps isolate data quality so service-level fixes are targeted.",
              bad: "Without measurement, value stays hidden. CODA surfaces it quickly.",
            },
          },
        ],
      },
      {
        id: "retailGovernance",
        name: "Data Governance / IT Director",
        personaName: "Arman Duval",
        company: "Lumina Retail Collective",
        role: "Sets standards and integrations across commerce, stores, and supply systems.",
        shortDescription:
          "Needs a way to enforce taxonomy, approvals, and integrations without slowing the business.",
        focusAreas: [
          "Taxonomy and attribute governance",
          "Cross-system synchronization",
          "Low-friction adoption by business teams",
        ],
        redPath:
          "Show how CODA automates validation and approvals across PIM, ERP, and eCommerce, then run a low-friction pilot with one brand.",
        questions: [
          {
            id: "retail-gov-1",
            text: "After a bad sync broke listings, how do you validate attributes before products sync to ERP and eCommerce?",
            options: [
              "Automated validations with clear exception handling.",
              "We rely on periodic cleanups and user reports.",
              "We rarely validate; speed matters most.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA enhances those validations and keeps exceptions traceable.",
              weak: "Cleanups miss issues. CODA adds continuous checks without slowing teams.",
              bad: "Skipping validation invites errors. CODA gives speed and control together.",
            },
          },
          {
            id: "retail-gov-2",
            text: "Who owns approvals for new products or changes today?",
            options: [
              "Clear RACI with business owning content and IT owning standards.",
              "Shared, but it depends on who is available.",
              "No defined owner; it happens as part of projects.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA codifies that RACI and provides evidence leadership expects.",
              weak: "Ad-hoc ownership risks drift. CODA standardizes approvals and SLAs.",
              bad: "No ownership means chaos. CODA brings governed flow without slowing releases.",
            },
          },
          {
            id: "retail-gov-3",
            text: "How do you detect and resolve duplicates before they reach downstream systems?",
            options: [
              "Automated validations at creation with clear exception handling.",
              "Periodic cleanups or user reports catch most issues.",
              "We rarely detect them; we fix when customers complain.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA amplifies that automation and keeps catalogs aligned across systems.",
              weak: "Cleanups leave leakage. CODA provides continuous checks.",
              bad: "Reactive fixes hurt CX. CODA prevents issues upfront.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "financialServices",
    name: "Financial Services",
    description:
      "Banks, insurers, and fintechs balancing growth, risk, and regulatory control.",
    personas: [
      {
        id: "fsCdo",
        name: "Chief Data Officer",
        personaName: "Callum Reeves",
        company: "Apex Horizon Bank",
        role: "Owns data quality, lineage, and controls across products and customers.",
        shortDescription:
          "Needs governed masters so analytics, onboarding, and regulatory reports align across systems.",
        focusAreas: [
          "Golden records for customer and product",
          "Regulatory reporting accuracy",
          "Faster onboarding for new products",
        ],
        redPath:
          "Connect CODA to reduced reconciliation effort and cleaner regulatory submissions, then pilot on a product line.",
        questions: [
          {
            id: "fs-cdo-1",
            text: "After a merger exposed duplicate customers, how do you maintain golden records for customers and products across core systems?",
            options: [
              "We run a governed hub with automated matching and approvals.",
              "We reconcile monthly and rely on data stewards.",
              "Each system owns its records; we align them during projects.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA strengthens that hub and surfaces issues before they propagate.",
              weak: "Monthly reconciliation leaves drift. CODA automates checks continuously.",
              bad: "Project-based alignment risks errors. CODA provides a consistent baseline.",
            },
          },
          {
            id: "fs-cdo-2",
            text: "What slows down new product onboarding from a data perspective?",
            options: [
              "Defining required attributes and mapping to downstream systems.",
              "Coordinating with compliance on naming and codes.",
              "Convincing teams to adopt new templates.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA standardizes attributes and mappings so onboarding is faster and safer.",
              weak: "Compliance alignment is easier with CODA’s governed templates.",
              bad: "Adoption improves when CODA reduces manual work—start there.",
            },
          },
          {
            id: "fs-cdo-3",
            text: "How do you evidence lineage and approvals during regulatory exams?",
            options: [
              "Centralized lineage with documented approvals.",
              "Exports from multiple systems and email threads.",
              "We ask teams to gather evidence on demand.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps lineage and approvals audit-ready and easy to present.",
              weak: "Manual exports are fragile. CODA provides consistent evidence.",
              bad: "Ad-hoc gathering is risky. CODA gives instant answers.",
            },
          },
        ],
      },
      {
        id: "fsRisk",
        name: "Risk & Compliance Officer",
        personaName: "Petra Sandoval",
        company: "Apex Horizon Bank",
        role: "Ensures data supports KYC, AML, and regulatory obligations.",
        shortDescription:
          "Needs confidence that masters meet policy so audits, KYC, and AML controls are reliable.",
        focusAreas: [
          "KYC/AML data completeness",
          "Audit-ready controls and lineage",
          "Reducing false positives and rework",
        ],
        redPath:
          "Show how CODA enforces required attributes and lineage to cut false positives and audit prep time; pilot on onboarding.",
        questions: [
          {
            id: "fs-risk-1",
            text: "When regulators raise KYC findings, how do you ensure KYC/AML attributes are complete and validated?",
            options: [
              "Automated validations with clear exception handling.",
              "Periodic reviews and manual sampling.",
              "We trust front-line capture and address gaps later.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA reinforces those validations and keeps evidence traceable.",
              weak: "Sampling misses risk. CODA checks continuously without heavy lift.",
              bad: "Deferring fixes risks fines. CODA prevents gaps early.",
            },
          },
          {
            id: "fs-risk-2",
            text: "What drives most false positives in your monitoring today?",
            options: [
              "Inconsistent or incomplete customer and counterparty data.",
              "Rules need tuning but data is solid.",
              "Volume is just high; we accept it.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA cleanses masters so rules operate on reliable data, reducing noise.",
              weak: "Rule tuning helps, but CODA ensures the data foundation is trusted.",
              bad: "Accepting noise wastes time. CODA shows quick reductions via better data.",
            },
          },
          {
            id: "fs-risk-3",
            text: "When regulators ask for evidence, how quickly can you provide it?",
            options: [
              "Within hours because lineage and approvals are centralized.",
              "Days—we gather logs from multiple teams.",
              "We escalate to IT and wait for exports.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that speed by making lineage accessible and consistent.",
              weak: "Long prep is costly. CODA cuts it by centralizing evidence.",
              bad: "Waiting is risky. CODA gives instant answers.",
            },
          },
        ],
      },
      {
        id: "fsOps",
        name: "Operations / Claims Director",
        personaName: "Marcus Llewellyn",
        company: "Apex Horizon Bank",
        role: "Drives efficiency and accuracy across servicing and claims.",
        shortDescription:
          "Wants clean masters so claims, servicing, and policy changes are handled fast without rework.",
        focusAreas: [
          "First-time-right servicing",
          "Reducing rework and manual checks",
          "Better vendor and partner data",
        ],
        redPath:
          "Tie data quality to cycle time and rework reduction, then pilot on one claim or servicing journey.",
        questions: [
          {
            id: "fs-ops-1",
            text: "A claims peer shaved cycle time by fixing master data—where do data issues slow claims or servicing the most?",
            options: [
              "Mismatched customer or policy data between systems.",
              "Occasional vendor data gaps but we manage.",
              "We don’t see major slowdowns from data quality.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA synchronizes masters so claims flow without rekeying or checks.",
              weak: "Vendor gaps still cost time. CODA standardizes those feeds too.",
              bad: "Issues often stay hidden. CODA surfaces them and shows quick wins.",
            },
          },
          {
            id: "fs-ops-2",
            text: "How do you prevent duplicate vendors or partners from entering the system?",
            options: [
              "Automated duplicate checks and approvals at creation.",
              "We rely on periodic cleanups or user reports.",
              "We merge duplicates when finance escalates.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA strengthens those checks and keeps integrations clean.",
              weak: "Cleanups leave leakage. CODA catches duplicates instantly.",
              bad: "Late merges create rework. CODA blocks issues up front.",
            },
          },
          {
            id: "fs-ops-3",
            text: "How do you measure the impact of bad masters on cycle time or NPS?",
            options: [
              "We quantify rework and delays tied to data quality.",
              "We infer it from SLA misses but don’t isolate data issues.",
              "We don’t measure; we focus on throughput.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA feeds that measurement with duplication and error rates tied to process steps.",
              weak: "CODA helps isolate data-driven SLA misses for targeted fixes.",
              bad: "Without measurement, value is hidden. CODA surfaces it quickly.",
            },
          },
        ],
      },
      {
        id: "fsTreasury",
        name: "Treasury / Finance Transformation",
        personaName: "Saira Whitfield",
        company: "Apex Horizon Bank",
        role: "Safeguards liquidity, reporting accuracy, and capital efficiency.",
        shortDescription:
          "Needs harmonized masters to reduce reconciliation effort and make funding decisions faster.",
        focusAreas: [
          "Consolidated visibility across ledgers",
          "Working-capital unlocks from clean data",
          "Faster close and reporting",
        ],
        redPath:
          "Quantify reconciliation effort and cash leakage from duplicates, then pilot CODA to prove faster close on one entity or product line.",
        questions: [
          {
            id: "fs-treasury-1",
            text: "When product masters differ, how do you reconcile balances across systems without manual patching?",
            options: [
              "We trust a governed master that feeds consolidation.",
              "We run manual reconciliations each close.",
              "We adjust entries after findings from audit or FP&A.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA keeps that governed master consistent and auditable.",
              weak: "Manual reconciliations are costly. CODA reduces effort with clean masters.",
              bad: "Post-close adjustments hide risk. CODA provides confidence earlier.",
            },
          },
          {
            id: "fs-treasury-2",
            text: "How do you estimate working capital tied up due to duplicate or stale records?",
            options: [
              "We model scenarios using accurate, standardized masters.",
              "We approximate based on historical write-offs.",
              "We don’t calculate; we assume buffers are necessary.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA feeds accurate duplication rates to sharpen those models and unlock cash.",
              weak: "Estimates can improve quickly with CODA’s real data.",
              bad: "Assumptions hide cash. CODA proves where to release it safely.",
            },
          },
          {
            id: "fs-treasury-3",
            text: "When auditors challenge data lineage, how do you respond?",
            options: [
              "We provide documented lineage and approvals within hours.",
              "We gather evidence from multiple teams over several days.",
              "We escalate to IT and wait for exports.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA maintains that readiness with centralized lineage.",
              weak: "Long prep is costly. CODA keeps evidence ready.",
              bad: "Waiting is risky. CODA provides immediate answers.",
            },
          },
        ],
      },
      {
        id: "fsDigital",
        name: "Digital Channels Lead",
        personaName: "Theo Marquez",
        company: "Apex Horizon Bank",
        role: "Owns digital onboarding, servicing, and personalization.",
        shortDescription:
          "Needs consistent masters so onboarding, offers, and analytics work across channels without friction.",
        focusAreas: [
          "Onboarding speed and accuracy",
          "Personalization with trusted data",
          "Integration reliability across channels",
        ],
        redPath:
          "Show how CODA cleanses and standardizes data feeding onboarding and personalization, then pilot on one journey to prove adoption lift.",
        questions: [
          {
            id: "fs-digital-1",
            text: "A channel leader saw drop-off from mismatched records—which digital journeys suffer most from data quality today?",
            options: [
              "Onboarding and personalized offers.",
              "Back-office reporting only.",
              "We don’t see issues yet.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Tie CODA cleansing directly to onboarding conversion and offer accuracy.",
              weak: "Reporting matters, but CODA proves value faster in frontline journeys.",
              bad: "Issues appear later. CODA proves readiness now.",
            },
          },
          {
            id: "fs-digital-2",
            text: "How do you measure if data quality is improving for digital channels?",
            options: [
              "We track completeness, duplicates, and error rates tied to journeys.",
              "We check when tests fail before releases.",
              "We rely on vendor SLAs for quality.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "CODA feeds those metrics and keeps them trending the right way.",
              weak: "Tests are late signals. CODA provides continuous monitoring.",
              bad: "SLAs alone hide risk. CODA adds transparency and control.",
            },
          },
          {
            id: "fs-digital-3",
            text: "What does success look like for your next digital release?",
            options: [
              "Higher adoption and trusted experiences across channels.",
              "Shipping on time even if data fidelity lags.",
              "Just proving the technology works in a demo.",
            ],
            bestOptionIndex: 0,
            feedback: {
              best: "Map CODA outputs to adoption and trust so the release lands.",
              weak: "Timelines matter, but CODA keeps quality intact.",
              bad: "Demos alone don’t stick. Use CODA to ensure production readiness.",
            },
          },
        ],
      },
    ],
  },
];

const industryListEl = document.getElementById("industryList");
const personaListEl = document.getElementById("personaList");
const industryDetailsEl = document.getElementById("industryDetails");
const personaDetailsEl = document.getElementById("personaDetails");
const redPathCardEl = document.getElementById("redPathCard");
const scenarioTitleEl = document.getElementById("scenarioTitle");
const scenarioDescriptionEl = document.getElementById("scenarioDescription");
const conversationLogEl = document.getElementById("conversationLog");
const currentPromptEl = document.getElementById("currentPrompt");
const answerOptionsEl = document.getElementById("answerOptions");
const feedbackContentEl = document.getElementById("feedbackContent");
const restartButton = document.getElementById("restartScenario");
const progressLabelEl = document.getElementById("progressLabel");
const progressFillEl = document.getElementById("progressFill");
const startTrainingButton = document.getElementById("startTraining");
const startInstructionsEl = document.getElementById("startInstructions");
const metricIndustriesEl = document.getElementById("metricIndustries");
const metricPersonasEl = document.getElementById("metricPersonas");
const metricQuestionsEl = document.getElementById("metricQuestions");
const contextBadgesEl = document.getElementById("contextBadges");

const coachingIntroHtml = `
  <div class="feedback-card">
    <p><strong>Stay value-led.</strong> Keep CODA's benefit to the persona front and center.</p>
    <ul>
      <li>Link every reply to a CODA capability and the outcome they care about.</li>
      <li>Call out the benefit in plain words: faster cash unlocks, safer uptime, or better control.</li>
      <li>End with the next proof you will show, like a quick PoC or a dashboard.</li>
    </ul>
  </div>
`;

let currentIndustry = null;
let currentPersona = null;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let displayedQuestionText = "";

function getPersonaIdentity(persona) {
  if (!persona) return "";
  const primaryName = persona.personaName || persona.name || "Persona";
  return persona.company ? `${primaryName} · ${persona.company}` : primaryName;
}

function getPersonaPosition(persona) {
  if (!persona) return "";
  if (persona.role && persona.name) {
    return `${persona.name} — ${persona.role}`;
  }
  return persona.role || persona.name || "";
}

function getPersonaBadgeLabel(persona) {
  if (!persona) return "";
  const primaryName = persona.personaName || persona.name || "Persona";
  return persona.name && persona.personaName
    ? `${primaryName} (${persona.name})`
    : primaryName;
}

function init() {
  renderLibraryMetrics();
  renderContextBadges();
  renderIndustryList();
  restartButton.addEventListener("click", () => {
    if (currentPersona) {
      startRoleplay();
    }
  });
  startTrainingButton.addEventListener("click", startRoleplay);
}

function renderLibraryMetrics() {
  if (!metricIndustriesEl || !metricPersonasEl || !metricQuestionsEl) return;

  const industryCount = verticals.length;
  const personaCount = verticals.reduce(
    (sum, industry) => sum + (industry.personas ? industry.personas.length : 0),
    0,
  );
  const questionCount = verticals.reduce((sum, industry) => {
    const personaQuestions = (industry.personas || []).reduce(
      (personaSum, persona) =>
        personaSum + (persona.questions ? persona.questions.length : 0),
      0,
    );
    return sum + personaQuestions;
  }, 0);

  metricIndustriesEl.textContent = industryCount;
  metricPersonasEl.textContent = personaCount;
  metricQuestionsEl.textContent = questionCount;
}

function renderContextBadges() {
  if (!contextBadgesEl) return;

  if (!currentIndustry || !currentPersona) {
    contextBadgesEl.innerHTML =
      '<span class="badge">No persona selected yet.</span>';
    return;
  }

  const focusSummary =
    (currentPersona.focusAreas || []).slice(0, 2).join(" · ") ||
    "Reliable data and disciplined cash";
  const redPathSummary = ensureSentence(
    currentPersona.redPath ||
      "Guide the dialogue toward an evidence-backed PoC",
  );
  const personaBadge = getPersonaBadgeLabel(currentPersona);
  const personaPosition = getPersonaPosition(currentPersona);

  contextBadgesEl.innerHTML = `
    <span class="badge"><strong>Industry</strong> ${currentIndustry.name}</span>
    <span class="badge"><strong>Persona</strong> ${personaBadge}</span>
    <span class="badge"><strong>Position</strong> ${personaPosition}</span>
    <span class="badge"><strong>Company</strong> ${
      currentPersona.company || "—"
    }</span>
    <span class="badge"><strong>Focus</strong> ${focusSummary}</span>
    <span class="badge"><strong>Red-path</strong> ${redPathSummary}</span>
  `;
}

function renderIndustryList() {
  industryListEl.innerHTML = "";
  verticals.forEach((industry) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = industry.name;
    button.dataset.id = industry.id;
    button.addEventListener("click", () => selectIndustry(industry.id));
    li.appendChild(button);
    industryListEl.appendChild(li);
  });
}

function selectIndustry(industryId) {
  currentIndustry = verticals.find((ind) => ind.id === industryId) || null;
  currentPersona = null;
  currentQuestionIndex = 0;
  totalQuestions = 0;
  updateActiveButtons(industryListEl, industryId);
  renderIndustryDetails();
  renderPersonaList();
  startTrainingButton.disabled = true;
  startInstructionsEl.textContent =
    "Complete Step 1 and Step 2 to unlock Step 3. Keep CODA's value to the persona in mind.";
  resetConversation();
  personaDetailsEl.innerHTML =
    "<p>Select a persona to view the storyline, value focus, and the best probing path.</p>";
  redPathCardEl.innerHTML =
    "<h2>Red-path Strategy</h2><p>Persona-specific cues will appear after you select someone.</p>";
  renderContextBadges();
}

function renderIndustryDetails() {
  if (!currentIndustry) {
    industryDetailsEl.innerHTML =
      "<p>Select an industry to see the story and hooks that land.</p>";
    return;
  }

  industryDetailsEl.innerHTML = `
    <h3>${currentIndustry.name}</h3>
    <p>${currentIndustry.description}</p>
  `;
}

function renderPersonaList() {
  personaListEl.innerHTML = "";

  if (!currentIndustry) {
    personaListEl.innerHTML =
      '<li class="placeholder">Pick an industry to unlock personas.</li>';
    return;
  }

  currentIndustry.personas.forEach((persona) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = `
      <span class="persona-button-title">${getPersonaIdentity(persona)}</span>
      <span class="persona-button-meta">${getPersonaPosition(persona)}</span>
    `;
    button.dataset.id = persona.id;
    button.addEventListener("click", () => selectPersona(persona.id));
    li.appendChild(button);
    personaListEl.appendChild(li);
  });

  updateActiveButtons(personaListEl, "");
}

function selectPersona(personaId) {
  if (!currentIndustry) return;
  currentPersona =
    currentIndustry.personas.find((p) => p.id === personaId) || null;
  currentQuestionIndex = 0;
  totalQuestions = currentPersona ? currentPersona.questions.length : 0;
  updateActiveButtons(personaListEl, personaId);
  renderPersonaDetails();
  renderRedPathCard();
  resetConversation();
  startTrainingButton.disabled = !(currentIndustry && currentPersona);
  if (currentPersona) {
    startInstructionsEl.textContent =
      "Start the roleplay with an opening question and pick how the persona answers to set the stage.";
  }
  renderContextBadges();
}

function renderPersonaDetails() {
  if (!currentPersona) {
    personaDetailsEl.innerHTML =
      "<h2>Persona briefing</h2><p>Select a persona to view their storyline, values, and question strategy.</p>";
    return;
  }

  const badgeList = (currentPersona.focusAreas || [])
    .slice(0, 3)
    .map((item) => `<li class="pill">${item}</li>`)
    .join("");

  const focusList = (currentPersona.focusAreas || [])
    .map((item) => `<li>${item}</li>`)
    .join("");

  const focusBlock = focusList
    ? `<div class="focus-areas"><p><strong>Focus the roleplay on:</strong></p><ul>${focusList}</ul></div>`
    : "<p><strong>Focus the roleplay on:</strong> reliable data, cash discipline, and confident decisions.</p>";

  personaDetailsEl.innerHTML = `
    <div class="persona-header">
      <div>
        <h2>Persona briefing</h2>
        <p class="persona-name">${getPersonaIdentity(currentPersona)}</p>
        <p class="persona-role">${getPersonaPosition(currentPersona)}</p>
      </div>
      ${badgeList ? `<ul class="pill-list">${badgeList}</ul>` : ""}
    </div>
    <p>${currentPersona.shortDescription}</p>
    ${focusBlock}
  `;
}

function renderRedPathCard() {
  if (!currentPersona) {
    redPathCardEl.innerHTML =
      "<h2>Red-path Strategy</h2><p>Choose a persona to see their coaching plan.</p>";
    return;
  }

  const redPathText = ensureSentence(
    currentPersona.redPath ||
      "Guide the dialogue to expose data risk, connect it to this persona's goals, and co-design a fast CODA proof.",
  );
  const focusSummary =
    (currentPersona.focusAreas || []).slice(0, 2).join(" and ") ||
    "cash discipline, uptime, and control";
  const personaIdentity = getPersonaIdentity(currentPersona);

  redPathCardEl.innerHTML = `
    <h2>Red-path Strategy</h2>
    <p>${redPathText}</p>
    <div class="redpath-steps">
      <p><strong>Train like this:</strong></p>
      <ol>
        <li>Lead with CODA's value in one line for ${personaIdentity}.</li>
        <li>Spell out the benefits they care about: ${focusSummary}.</li>
        <li>Keep the dialogue moving toward a quick CODA proof or pilot.</li>
      </ol>
      <p><strong>Stay clear:</strong> Use simple language and connect every answer to how CODA helps this persona win.</p>
    </div>
  `;
}

function startRoleplay() {
  if (!currentPersona) return;
  currentQuestionIndex = 0;
  totalQuestions = currentPersona.questions.length;
  displayedQuestionText = "";
  const personaIdentity = getPersonaIdentity(currentPersona);
  const personaPosition = getPersonaPosition(currentPersona);
  scenarioTitleEl.textContent = `Roleplay with ${personaIdentity}`;
  scenarioDescriptionEl.textContent = `${personaPosition} ${currentPersona.shortDescription}`;
  restartButton.disabled = false;
  conversationLogEl.innerHTML = "";
  feedbackContentEl.innerHTML = coachingIntroHtml;
  refreshProgress(0, totalQuestions);
  renderCurrentQuestion();
}

function resetConversation() {
  conversationLogEl.innerHTML =
    '<p class="empty-state">No dialogue yet. Select a persona and start the roleplay.</p>';
  currentPromptEl.innerHTML = "<strong>Question:</strong> —";
  answerOptionsEl.innerHTML = "";
  displayedQuestionText = "";
  feedbackContentEl.innerHTML = coachingIntroHtml;
  restartButton.disabled = true;
  refreshProgress(0, 0);
}

function renderCurrentQuestion() {
  if (!currentPersona) return;
  const question = currentPersona.questions[currentQuestionIndex];
  if (!question) {
    concludeRoleplay();
    return;
  }

  displayedQuestionText = formatOpeningQuestion(
    question.text,
    currentQuestionIndex === 0,
  );
  currentPromptEl.innerHTML = `<strong>Question:</strong> ${displayedQuestionText}`;
  answerOptionsEl.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-copy">${optionText}</span>`;
    button.addEventListener("click", () => handleAnswer(question, index));
    answerOptionsEl.appendChild(button);
  });
}

function handleAnswer(question, selectedIndex) {
  const evaluation = evaluateAnswer(question, selectedIndex);
  addConversationEntry(
    displayedQuestionText || question.text,
    question.options[selectedIndex],
    evaluation.quality,
  );
  updateFeedback(
    evaluation.feedbackMessage,
    evaluation.quality,
    question,
    displayedQuestionText || question.text,
  );
  currentQuestionIndex += 1;
  refreshProgress(currentQuestionIndex, totalQuestions);
  renderCurrentQuestion();
}

function evaluateAnswer(question, selectedIndex) {
  const bestIndex = question.bestOptionIndex;
  const weakIndex =
    typeof question.weakOptionIndex === "number"
      ? question.weakOptionIndex
      : question.options
          .map((_, idx) => idx)
          .filter((idx) => idx !== bestIndex)[0];
  const badIndex =
    typeof question.unfavorableOptionIndex === "number"
      ? question.unfavorableOptionIndex
      : question.options.findIndex(
          (_, idx) => idx !== bestIndex && idx !== weakIndex,
        );
  const isBest = selectedIndex === bestIndex;
  const isWeak = selectedIndex === weakIndex;

  if (isBest) {
    return { quality: "Optimal", feedbackMessage: question.feedback.best };
  }

  if (isWeak) {
    return { quality: "Medium", feedbackMessage: question.feedback.weak };
  }

  return { quality: "Unfavorable", feedbackMessage: question.feedback.bad };
}

function addConversationEntry(question, answer, quality) {
  const entry = document.createElement("div");
  entry.className = "conversation-entry";

  const stageEl = document.createElement("p");
  stageEl.className = "stage-type";
  stageEl.textContent = `Question ${currentQuestionIndex + 1}`;

  const questionEl = document.createElement("p");
  questionEl.className = "question";
  questionEl.innerHTML = `<strong>Question:</strong> ${question}`;

  const answerEl = document.createElement("p");
  answerEl.className = `answer ${getQualityClass(quality)}`;
  answerEl.textContent = `Answer (${quality}): ${answer}`;

  entry.appendChild(stageEl);
  entry.appendChild(questionEl);
  entry.appendChild(answerEl);
  conversationLogEl.appendChild(entry);
  conversationLogEl.scrollTop = conversationLogEl.scrollHeight;
}

function updateFeedback(feedback, quality, question, displayedQuestion) {
  const importance = buildImportanceNote(question, displayedQuestion);
  const coachingCue = buildCoachingCue(quality);

  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <div class="feedback-details">
        <p><strong>Quality:</strong> ${quality}</p>
        <div class="feedback-note"><strong>Why this question matters:</strong> ${importance}</div>
        <div class="feedback-note"><strong>Coaching cue:</strong> ${coachingCue}</div>
        <div class="feedback-note"><strong>Persona-specific guidance:</strong> ${ensureSentence(
          feedback,
        )}</div>
      </div>
    </div>
  `;
}

function concludeRoleplay() {
  currentPromptEl.innerHTML =
    "<strong>Question:</strong> The persona awaits your summary and PoC next steps.";
  answerOptionsEl.innerHTML = "";
  refreshProgress(totalQuestions, totalQuestions);
  feedbackContentEl.innerHTML = `
    <div class="feedback-card">
      <p><strong>Roleplay complete.</strong></p>
      <p>Summarize the value you uncovered, map CODA capabilities to it, and propose the next session.</p>
    </div>
  `;
}

function updateActiveButtons(listEl, activeId) {
  const buttons = listEl.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.id === activeId);
  });
}

function refreshProgress(completedSteps, stepsTotal) {
  if (!progressFillEl || !progressLabelEl) return;
  if (!stepsTotal) {
    progressFillEl.style.width = "0%";
    progressLabelEl.textContent = "Step 0 of 0";
    return;
  }

  const clampedCompleted = Math.min(completedSteps, stepsTotal);
  const percent = (clampedCompleted / stepsTotal) * 100;
  progressFillEl.style.width = `${percent}%`;

  const displayStep =
    clampedCompleted >= stepsTotal ? stepsTotal : clampedCompleted + 1;
  progressLabelEl.textContent = `Step ${displayStep} of ${stepsTotal}`;
}

function getQualityClass(quality) {
  switch (quality) {
    case "Optimal":
      return "quality-optimal";
    case "Medium":
      return "quality-medium";
    default:
      return "quality-unfavorable";
  }
}

function ensureQuestion(text) {
  if (typeof text !== "string") return "How does this impact your operation?";
  const trimmed = text.trim();
  if (!trimmed) return "How does this impact your operation?";
  const sanitized = trimmed.replace(/[?]+$/, "");
  return `${sanitized}?`;
}

function formatOpeningQuestion(questionText, isFirstQuestion) {
  const baseQuestion = ensureQuestion(
    typeof questionText === "string" ? questionText.trim() : "",
  );

  if (!isFirstQuestion) {
    return baseQuestion;
  }

  const industryName = currentIndustry?.name || "this industry";
  const personaLabel = currentPersona?.name || "peer";
  const focusPunch =
    (currentPersona?.focusAreas || [])[0] || "working capital and reliability";
  const dramaticHook = `Recently, a ${personaLabel} peer in ${industryName} unlocked $10M by eliminating 10% duplicate stock tied to ${focusPunch}.`;

  return ensureQuestion(`${dramaticHook} ${baseQuestion}`);
}

function ensureSentence(text) {
  if (typeof text !== "string") return "";
  const trimmed = text.trim();
  if (!trimmed) return "";
  const lastChar = trimmed.slice(-1);
  if ([".", "?", "!"].includes(lastChar)) {
    return trimmed;
  }
  return `${trimmed}.`;
}

function buildImportanceNote(question, displayedQuestion) {
  const focusAreas = currentPersona?.focusAreas || [];
  const focusSummary =
    focusAreas.slice(0, 2).join(" and ") || "cash, reliability, and control";
  const topicSource =
    (typeof displayedQuestion === "string" && displayedQuestion.trim()) ||
    (typeof question?.text === "string" && question.text.trim()) ||
    "this topic";
  const topic =
    typeof topicSource === "string" ? topicSource.toLowerCase() : "this topic";

  return ensureSentence(
    `This opener combines a proof point with ${topic.toLowerCase()} to test how the persona links data quality to ${focusSummary}. It sets up CODA as the fastest path to repeat that win.`,
  ).replace("..", ".");
}

function buildCoachingCue(quality) {
  const personaOutcome =
    currentPersona?.redPath || "Guide toward an evidence-backed PoC.";
  const baseCue =
    quality === "Optimal"
      ? "Strong response—affirm the impact and suggest how CODA proves it in a 4-week pulse."
      : quality === "Medium"
        ? "Good instinct—tighten the link to business KPIs so the persona feels the urgency."
        : "Reframe with a crisp business outcome before diving into details to keep credibility high.";

  return ensureSentence(`${baseCue} ${personaOutcome}`);
}

init();
