# 📘 FlowSquad - User Guide

> **Evaluation Version** | 45-Day Trial | Maximum 2 Products

---

## 🎯 Overview: From Code to Intelligent Design & Decisions

**FlowSquad** is an AI-powered SDLC intelligence platform that transforms how development teams create requirements, designs, and test cases. Instead of starting from scratch or using generic AI tools, FlowSquad learns from **YOUR actual codebase** to generate context-aware documentation.

### The Problem We Solve

**Traditional SDLC Documentation Challenges:**
- ❌ **Vague Requirements:** "Add user login" → But what about password reset? MFA? Session management?
- ❌ **Manual Design Docs:** Hours spent creating technical designs that become outdated immediately
- ❌ **Copy-Paste Test Cases:** Rewriting the same test scenarios for every new feature
- ❌ **No Quality Visibility:** Is this release better or worse than the last? No one knows.
- ❌ **Generic AI Guesses:** ChatGPT/Copilot don't understand YOUR code patterns and conventions

**FlowSquad's Approach:**
- ✅ **Codebase-Aware AI:** Vector database learns YOUR code patterns, frameworks, and conventions
- ✅ **Complete SDLC Pipeline:** Code Analysis → Requirements → Design → Test Cases → Quality Scoring
- ✅ **Context-Driven Generation:** Every output considers your existing codebase structure
- ✅ **Quality Gates:** Completeness scores (0-100), risk analysis, automated recommendations
- ✅ **Time Savings:** 80% reduction in SDLC documentation time

### How It Works

```
1. Analyze Your Code
   └─> Parse any language (Python, Java, JavaScript, etc.)
   └─> Extract modules, dependencies, complexity, patterns
   └─> Store embeddings in vector database

2. Refine Requirements
   └─> Transform vague ideas into complete requirements
   └─> AI adds acceptance criteria, dependencies, risks
   └─> Completeness scoring (0-100) ensures quality

3. Generate Designs
   └─> Auto-create technical design documents
   └─> Architecture diagrams, API contracts, database schemas
   └─> Context-aware: knows your existing tech stack

4. Create Test Cases
   └─> Learn from your existing test patterns
   └─> Generate new test cases that match your style
   └─> Automation script analysis (Selenium, Pytest, Cypress, etc.)

5. Score Quality
   └─> Quality metrics (test coverage, automation %, complexity)
   └─> Risk analysis (low/medium/high per module)
   └─> Prioritized recommendations for improvement
```

### Who Should Use FlowSquad?

**✅ Perfect For:**
- **Product Managers:** Transform vague ideas into complete user stories with acceptance criteria
- **Business Analysts:** Document requirements with AI-powered refinement and completeness scoring
- **Software Architects:** Auto-generate technical designs aligned with existing architecture
- **Development teams:** 5-500 developers building features faster with less documentation overhead
- **Engineering managers:** Gain visibility into quality metrics and technical debt
- **QA teams:** Automate test case creation and track automation coverage
- **System integrators:** Handle repetitive patterns with codebase-aware AI
- **Regulated industries:** Finance, healthcare, government needing comprehensive documentation

**🎯 Best Results When:**
- You have existing codebase to analyze (FlowSquad learns from it)
- You need consistent, high-quality requirements
- You want to reduce manual documentation time
- You need quality metrics and risk analysis

---

## 🚀 Quick Start

**FlowSquad Evaluation is available in two deployment options:**
- **Windows Portable** - No installation required, double-click to run
- **Docker Container** - Cross-platform deployment for Linux, macOS, Windows (WSL/Docker Desktop), and servers

Choose the installation method below that matches your environment.

---

### Installation (Portable Version)

**FlowSquad Evaluation is distributed as a portable package - no installation required!**

**Windows:**
1. **Extract** the `FlowSquad-Portable-v1.0.zip` to a folder (e.g., `C:\FlowSquad`)
   - Right-click → Extract All → Choose location
   - ⚠️ **Do NOT extract to temporary folders** (Downloads, Temp, Desktop)
   - ⚠️ **Avoid protected folders** (Program Files, Windows, System32) - permission issues
   - ✅ **Best locations:** `C:\FlowSquad`, `D:\FlowSquad`, or any user-writable directory

2. **Run** `FlowSquad.exe` from the extracted folder
   - Double-click `FlowSquad.exe`
   - First launch may take 10-15 seconds (initializing Python environment)
   - ✅ Windows Defender/Firewall: Allow access when prompted

3. **Access** FlowSquad in your browser
   - Browser automatically opens to `http://localhost:5000`
   - If browser doesn't open, manually navigate to `http://localhost:5000`
   - ✅ Bookmark this URL for easy access

4. **Complete** the setup wizard on first launch (see below)

**Running FlowSquad:**
- Keep `FlowSquad.exe` running while using the application
- **System Tray Icon:** FlowSquad appears as a notification icon in the system tray (bottom-right of taskbar)
  - Right-click the icon to quit the application
  - Closing the console window (if visible) will also stop FlowSquad
- To restart: Double-click `FlowSquad.exe` again

**Data Location:**
- All data stored in your local AppData folder:
  - Location: `C:\Users\[YourUsername]\AppData\Local\FlowSquad\`
  - `flowsquad.db` - Database file
  - `vector_db/` - Code analysis embeddings
  - `uploaded_documents/` - Generated reports
  - `analysis_output/` - Analysis results
- **Backup:** Copy the `AppData\Local\FlowSquad` folder to preserve all data

**System Requirements:**
- Windows 10/11 (64-bit)
- 4 GB RAM minimum, 8 GB recommended
- 2 GB free disk space (more for large codebases)
- Internet connection (for LLM API access)

---

### Installation (Docker - Linux/macOS/WSL/Server)

**FlowSquad is available as a Docker container for cross-platform deployment!**

**Prerequisites:**
- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose (included with Docker Desktop)
- 4 GB RAM minimum, 8 GB recommended
- Internet connection (for LLM API access)

**Quick Start:**

1. **Extract** the `FlowSquad-Docker-v1.4.zip` to a folder

2. **Deploy** using the deployment script:

   **Windows (PowerShell):**
   ```powershell
   .\deploy.ps1
   ```

   **Linux/Mac:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. **Access** FlowSquad in your browser
   - Navigate to **http://localhost:5000**
   - First launch may take 15-20 seconds (container initialization)

4. **Complete** the setup wizard on first launch (see below)

**Managing the Container:**

```powershell
# Windows PowerShell
.\deploy.ps1 -Status    # Check if running
.\deploy.ps1 -Logs      # View logs
.\deploy.ps1 -Stop      # Stop container
.\deploy.ps1            # Start (run again)
```

```bash
# Linux/Mac
./deploy.sh status      # Check if running
./deploy.sh logs        # View logs  
./deploy.sh stop        # Stop container
./deploy.sh             # Start (run again)
```

**Data Persistence:**
- All data stored in Docker volume: `flowsquad-data`
- Survives container restarts and updates
- Location: `/data` inside container
  - `flowsquad.db` - Database file
  - `vector_db/` - Code analysis embeddings
  - `uploaded_documents/` - Generated reports
  - `config/` - License and configuration

**Backup:**
```bash
# Backup data volume (creates flowsquad-backup.tar.gz in current directory)
# Note: "alpine" is a tiny Linux image used to run the tar command
docker run --rm -v flowsquad-data:/data -v $(pwd):/backup alpine tar czf /backup/flowsquad-backup.tar.gz /data
```

**Restore:**
```bash
# Restore data volume from backup
docker run --rm -v flowsquad-data:/data -v $(pwd):/backup alpine tar xzf /backup/flowsquad-backup.tar.gz -C /
```

**Alternative (using docker cp):**
```bash
# Backup - Copy entire data directory from container to host
docker cp flowsquad-app:/data ./flowsquad-backup

# Restore - Copy directory back into container
docker cp ./flowsquad-backup/. flowsquad-app:/data
```

**🔑 Docker License Requirements:**

Docker containers have **different machine IDs** than the host system. You'll need to:

1. **First startup:** FlowSquad detects it's unlicensed and shows activation page
2. **Request Docker License:** Contact support with your container's machine ID
   - The machine ID is displayed on the license activation page
   - Specify that you need a **Docker/container license**
3. **Activate:** Support will provide a container-specific license file

**Alternatively:** Run the Windows portable version on your development machine for evaluation (no separate license needed)

**📁 Providing Code for Analysis:**

Docker containers are isolated from your local filesystem. Choose one of these options:

**Option 1: Docker CP (Easiest for Evaluation)**
```bash
# Copy your codebase into the running container
docker cp /path/to/your/code flowsquad-app:/data/my-project

# Then in FlowSquad UI, enter path: /data/my-project
```

**Option 2: Volume Mount (Recommended for Development)**

Edit `docker-compose.yml` before starting:
```yaml
volumes:
  - flowsquad-data:/data
  - /host/path/to/code:/data/repos  # Add this line
```

Then in FlowSquad UI, enter: `/data/repos`

**⚠️ Volume Limitations:**
- Only works if Docker runs on the **same machine** as your code
- Does **not** work with remote Docker servers (code must be accessible to Docker host)

**Option 3: Git URLs (Enterprise Edition)**
- Enterprise edition supports GitHub/GitLab/Bitbucket integration
- Evaluation version: Local paths only

**Path Format Examples:**
- ✅ `/data/my-automation` (Docker container path)
- ✅ `/data/repos/backend-api` (if mounted via docker-compose.yml)
- ❌ `C:\Users\Me\Code` (Windows host path - won't work in container)
- ❌ `~/code/project` (Host home directory - won't work)

**System Requirements:**
- Linux (native or WSL), macOS (Docker Desktop), or Windows (Docker Desktop/WSL2)
- Docker 20.10+ and Docker Compose 2.0+
- 4 GB RAM minimum, 8 GB recommended
- 5 GB free disk space (more for large codebases)
- Internet connection (for LLM API access)

---

### First Time Setup

The setup wizard guides you through configuration:

**Step 1: Select AI Provider**
- **GitHub Models** pre-selected as default (recommended for evaluation)
  - **30-day free trial** - perfect for testing FlowSquad
  - Access to GPT-4o, GPT-4o-mini, and embeddings
  - Requires GitHub account and Personal Access Token
- Alternative providers:
  - **OpenAI** - GPT-4, GPT-3.5 Turbo, text-embedding-3-small (paid plans)
  - **Anthropic** - Claude 3.5 Sonnet, Claude 3 Opus (advanced reasoning)

**Step 2: Configure Models & API**
- **Dynamic Instructions:** Provider-specific setup steps appear automatically
- **Get Your API Key:**
  - **GitHub Models:** https://github.com/settings/tokens (create Personal Access Token)
  - **OpenAI:** https://platform.openai.com/api-keys
  - **Anthropic:** https://console.anthropic.com/settings/keys
- **Test API Key:** Click "Test Key" to validate access and fetch available models
  - ✅ Validates authentication AND model access (not just credentials)
  - ✅ Fetches your actual available models from the API
  - ✅ Detects free tier limitations and quota issues
- **Select Models:** Choose from models your API key can actually access
  - Dropdowns populate with **only accessible models** after testing
  - Recommended: GPT-4 or GPT-4o for text generation
  - Recommended: text-embedding-3-small for embeddings
- Set token limits (max tokens per request) and daily limits for cost control

**Step 3: Optional LDAP Security (Recommended for Enterprise)**
- **Enable LDAP for secure authentication** against Active Directory
- Benefits: Centralized user management, password policies, audit trails
- Configure LDAP server, port, bind credentials, and search base
- Map LDAP groups to FlowSquad roles
- Otherwise, use default admin/admin login (change password for security)

**Step 4: Review & Complete**
- Verify settings and click "Complete Setup"

### Login

Default credentials:
- **Username:** admin
- **Password:** admin

---

## 📦 Working with Products

### Creating a Product

**Option 1: Try Demo (Recommended for First-Time Users)**
1. Click "🎬 Try Demo" button on dashboard
2. **Real-Time Progress Tracking:** Watch as FlowSquad builds your demo with detailed step-by-step progress:
   - **Step 1:** Initializing environment - Setting up database connections, VectorDB, and locating demo files
   - **Step 2:** Creating E-Commerce Demo product - Registering product in database with admin permissions
   - **Step 3:** Preparing codebase components - Registering Backend API (Python), Frontend (TypeScript), and Payment Service (Node.js)
   - **Step 4:** Analyzing Backend API - Running AI semantic analysis on Python Flask REST API codebase
   - **Step 5:** Analyzing Frontend & Payment Service - Running AI semantic analysis on TypeScript React and Node.js microservice
   - **Step 6:** Loading sample test cases - Importing 15 test cases from CSV and indexing in VectorDB for semantic search
   - **Step 7:** Finalizing demo setup - Marking product as analyzed, adding test automation path, preparing dashboard
3. **Completion Message:** "🎉 FlowSquad at your service!"
   - **Next Step:** Load sample requirements from `demo-products/ecommerce-platform/quick-requirements.txt`
   - Go to Requirements tab → Paste text → Click "Refine Requirements"
   - **Ready to help you make informed decisions from your code!**
4. Demo includes **real analysis** (not static data):
   - 3 codebases analyzed with AI semantic analysis
   - Backend API: Flask REST API (Python)
   - Frontend: React TypeScript application
   - Payment Service: Node.js microservice
   - 15 test cases loaded in VectorDB for semantic search
   - Sample requirements file available (14 requirements) to manually load in Requirements tab
   - Quality score metrics based on actual analysis
5. **Try the complete workflow:**
   - **Analyze Tab:** View analyzed codebases and their intelligence
   - **Requirements Tab:** Load `demo-products/ecommerce-platform/quick-requirements.txt` and refine with AI
   - **Design Tab:** Generate technical designs from refined requirements
   - **Test Cases Tab:** View loaded test cases and generate new ones
   - **QA Automation Tab:** Upload automation scripts from `demo-products/ecommerce-platform/tests`
   - **Quality Score Tab:** Calculate quality score (improves to 80+ after uploading automation)
6. Full SDLC workflow: Analyze → Refine Requirements → Design → Generate Tests → Check Quality

**Option 2: Create New Product**
1. Click "Add Product" from dashboard
2. Enter product name and description
3. Product admin is automatically set to "admin" (or select LDAP users if configured)
4. Click "Create Product"
5. Start adding codebases and requirements

### Product Dashboard

Once created, access the product dashboard to:
- Analyze codebase structure
- Load and refine requirements
- Generate design documents
- Create test cases
- Analyze automation scripts
- Check quality metrics

---

## 🔧 Main Features

### 1. Code Analysis

**Purpose:** Understand your codebase structure, complexity, and language metrics

**How to use:**
1. Go to product dashboard → Code Analysis tab
2. Enter Git repository URL (or upload ZIP)
3. Provide credentials if private repository
4. Click "Analyze Codebase"
5. **View comprehensive results:**
   - **Language Metrics:** Lines of code per language (Python, JavaScript, Java, TypeScript, etc.)
   - **Language Distribution:** Percentage breakdown and visual charts
   - **Complexity Analysis:** Cyclomatic complexity, cognitive complexity
   - **Code Structure:** Entry points, dependencies, architecture layers
   - **Technology Stack:** Frameworks and libraries detected
   - **File Statistics:** Total files, directories, module count
6. Export analysis results for documentation

### 2. Requirements Management

**Purpose:** Refine and improve requirements quality

**How to use:**
1. Go to Requirements tab
2. Choose input method:
   - Paste text directly (one-liner or full document)
   - Upload requirement document (.md, .txt, .pdf)
   - Load from Jira ticket *(Enterprise feature - preview only)*
   - Load from Confluence page *(Enterprise feature - preview only)*
3. Click "Refine Requirements"
4. Review AI-generated refined requirements with:
   - Structured user stories
   - Acceptance criteria
   - Technical specifications
   - Priority assignments
5. Download or copy results

**Note:** Jira and Confluence integration are Enterprise features. In evaluation version, you can paste content manually or upload documents.

**Demo Sample Requirements:**
- Full document: `demo-products/ecommerce-platform/requirement-doc.md`
- Quick one-liners: `demo-products/ecommerce-platform/quick-requirements.txt`

### 3. Design Generation

**Purpose:** Create technical design from requirements

**How to use:**
1. Go to Design tab
2. Select source (refined requirements or paste manually)
3. Click "Generate Design"
4. Review architecture diagrams and specifications
5. Download design document

### 4. Test Case Generation

**Purpose:** Generate comprehensive test scenarios and manage test data

**How to use:**
1. Go to Test Cases tab
2. **Option A - Generate from Design:**
   - Select source (design document or paste requirements)
   - Click "Generate Test Cases"
   - Review AI-generated scenarios with steps and expected results
3. **Option B - Upload Existing Tests:**
   - Click "Upload Test Cases" button
   - Select CSV or Excel file with columns: title, priority, status, description
   - Test cases stored for quality analysis
4. **Manage Test Cases:**
   - View all test cases in table format
   - Export to Excel/CSV for external use
   - Delete test cases using "Delete Test Cases" button
5. View test-to-code ratio and coverage metrics

### 5. Automation Analysis

**Purpose:** Analyze test automation scripts and measure automation coverage

**How to use:**
1. Go to QA Automation tab
2. **Analyze Scripts:**
   - Enter automation repository URL (Git)
   - Or upload automation scripts as ZIP
   - Click "Analyze Automation"
3. **View Results:**
   - Framework detection (Selenium, Pytest, JUnit, Cypress, etc.)
   - Script count and coverage metrics
   - Automation patterns and best practices
   - Recommendations for improvement
4. **Manage Automation:**
   - Delete automation data using "Delete Automation" button
   - Re-analyze after updates with "Re-Analyze" button
5. **Quality Impact:**
   - Automation data feeds into Quality Score calculation
   - Higher automation coverage improves overall quality metrics

### 6. Quality Score Analysis

**Purpose:** Comprehensive quality metrics combining code, tests, and automation

**How to use:**
1. Go to Quality Score tab
2. **Select Scan Mode:**
   - **Quick Scan (Recommended):** Test density analysis via keyword matching
     - ⚡ **Speed:** 1-2 seconds
     - 💰 **Cost:** Free
     - 📊 **Method:** Measures test-to-code ratio (proxy metric)
     - ✅ **Best for:** Fast quality checks, regular monitoring
   - **Deep Scan:** LLM semantic coverage analysis
     - ⏱️ **Speed:** 30-60 seconds
     - 💰 **Cost:** $0.10-0.30 per analysis (API costs)
     - 📊 **Method:** LLM validates actual function coverage
     - ✅ **Best for:** Accurate coverage assessment, pre-release audits
3. Click "Calculate Quality Score" (auto-calculates if data exists)
4. **Review 3-Layer Scoring System:**
   - **Test Density/Semantic Coverage (60 points):**
     - Quick Scan: Test-to-code ratio (tests per module)
     - Deep Scan: Actual function coverage by LLM analysis
   - **Automation Coverage (30 points):** Automated tests / Total tests
   - **Bonus (10 points):** High coverage on both metrics
5. **View Detailed Insights:**
   - Covered vs uncovered modules
   - Test-to-code ratio (Quick) or function coverage (Deep)
   - Automation percentage (target: >70%)
   - Untested modules/functions requiring attention
   - Risk assessment and recommendations
6. **Quality Recommendations:**
   - Prioritized list of high-risk modules
   - Suggested automation targets
   - Code quality improvements

**Scan Mode Comparison:**

| Feature | Quick Scan (Test Density) | Deep Scan (Semantic) |
|---------|---------------------------|----------------------|
| **Analysis Time** | 1-2 seconds | 30-60 seconds |
| **Cost** | Free | ~$0.10-0.30 |
| **Method** | Keyword matching | LLM semantic analysis |
| **Accuracy** | Proxy metric (test count) | Actual coverage (functions tested) |
| **Use Case** | Daily monitoring | Release validation |
| **What it measures** | Tests per module ratio | Functions covered by tests |

**Quality Score Ranges:**
- 90-100: Excellent (Production-ready)
- 75-89: Good (Minor improvements needed)
- 60-74: Acceptable (Moderate technical debt)
- Below 60: Needs Improvement (High risk)

---

## 📊 Understanding Quality Score Calculation

**FlowSquad's quality score is a weighted combination of three key metrics:**

**Scan Mode Impact:**
- **Quick Scan:** Score based on test-to-code ratio (fast approximation)
- **Deep Scan:** Score based on actual function coverage (accurate validation)

### Formula Breakdown

```
Quality Score = (Test Density/Semantic Coverage × 0.6) + (Automation Coverage × 0.3) + Bonus (0-10 points)

Where:
- Test Density (Quick) = Based on test-to-code ratio (0-100%)
- Semantic Coverage (Deep) = LLM-validated function coverage (0-100%)
- Automation Coverage = (Automated Tests / Total Tests) × 100%
- Bonus = +10 points if Code Coverage >70% AND Automation >50%
```

### Component 1: Test Density / Semantic Coverage (60% weight)

**IMPORTANT:** This is NOT traditional code coverage (line/branch coverage from instrumentation tools).

**Quick Scan - Test Density:**
- **What it measures:** Test-to-code ratio via keyword matching
- **How it works:** Counts tests mapped to each module by name similarity
- **Accuracy:** Proxy metric (doesn't validate actual test content)
- **Speed:** 1-2 seconds
- **Cost:** Free

**Deep Scan - Semantic Coverage:**
- **What it measures:** Actual function coverage using LLM
- **How it works:** LLM extracts functions from code, validates which tests cover them
- **Accuracy:** High (validates actual test-function relationships)
- **Speed:** 30-60 seconds
- **Cost:** ~$0.10-0.30 per analysis

**Quick Scan Scoring:**
- **0 tests:** 0% density
- **1 test per module:** 20% density
- **3 tests per module:** 60% density (recommended minimum)
- **5+ tests per module:** 100% density (ideal)

**Quick Scan Example:**
```
Scenario: 10 code modules, 30 test cases
Test-to-code ratio: 30/10 = 3.0
Test Density Score: 60%
Contribution to Quality: 60% × 0.6 = 36 points
```

**Deep Scan Scoring:**
- **Calculation:** (Covered Functions / Total Functions) × 100%
- **Method:** LLM analyzes test descriptions vs code functions
- **Accuracy:** True semantic coverage, not just keyword matching

**Deep Scan Example:**
```
Scenario: 50 functions across modules, 32 covered by tests
Semantic Coverage: 32/50 = 64%
Contribution to Quality: 64% × 0.6 = 38.4 points
```

**When to Use Each Mode:**
- **Quick Scan:** Daily monitoring, fast checks, cost-sensitive
- **Deep Scan:** Pre-release audits, accurate assessment, compliance reporting

### Component 2: Automation Coverage (30% weight)

**What it measures:** Percentage of test cases that are automated

**Calculation:**
```
Automation % = (Number of Automation Scripts / Number of Test Cases) × 100%
```

**Example:**
```
Scenario: 30 test cases, 21 automation scripts
Automation Coverage: 21/30 = 70%
Contribution to Quality: 70% × 0.3 = 21 points
```

### Component 3: Completeness Bonus (10 points)

**Conditions:** Both must be true:
- Test Density/Semantic Coverage > 70%
- Automation Coverage > 50%

**Example:**
```
Test Density: 75% ✅
Automation Coverage: 70% ✅
Bonus: +10 points
```

### Complete Example

**E-Commerce Demo Scenario:**

**Initial State (After Demo Creation) - Quick Scan:**
```
Code Modules: 3 (Backend, Frontend, Payment Service)
Test Cases: 15
Automation Scripts: 0

Test Density (Quick Scan):
- Test-to-code ratio: 15/3 = 5.0
- Density: 100% (5+ tests per module)
- Score: 100% × 0.6 = 60 points

Automation Coverage:
- Scripts: 0/15 = 0%
- Score: 0% × 0.3 = 0 points

Bonus: 0 (automation <50%)

Total Quality Score: 60/100 ⚠️
```

**After Uploading Automation - Quick Scan:**
```
Code Modules: 3
Test Cases: 15
Automation Scripts: 14

Test Density:
- Test-to-code ratio: 15/3 = 5.0
- Density: 100%
- Score: 100% × 0.6 = 60 points

Automation Coverage:
- Scripts: 14/15 = 93%
- Score: 93% × 0.3 = 28 points

Bonus: +10 (100% code + 93% automation)

Total Quality Score: 98/100 ✅
```

**Deep Scan Example (More Accurate):**
```
Same scenario, but with semantic analysis:

Code Modules: 3 with 47 total functions
Test Cases: 15 (analyzing actual test content)

Semantic Coverage (Deep Scan with LLM):
- LLM analyzes which functions are actually tested
- Functions covered: 38/47 = 81%
- Score: 81% × 0.6 = 48.6 points

Automation Coverage:
- Scripts: 14/15 = 93%
- Score: 93% × 0.3 = 28 points

Bonus: +10 (81% coverage + 93% automation)

Total Quality Score: 87/100 ✅ (more accurate than Quick Scan 98)
```

**Why Different Scores?**
- **Quick Scan:** Assumes all 15 tests equally cover 3 modules (100% density)
- **Deep Scan:** LLM finds only 38/47 functions actually tested (81% coverage)
- **Deep Scan is more accurate** - reveals gaps Quick Scan misses

### How FlowSquad Maps Tests to Code

**Mapping differs by scan mode:**

**Quick Scan Mapping (Keyword-Based):**

**Quick Scan Mapping (Keyword-Based):**

**Method:** Intelligent keyword matching (fast, approximate)

**Mapping Logic:**

1. **Test Case → Code Module**
   - Extracts keywords from test case names and descriptions
   - Matches against code file names, paths, and module names
   - Example: Test "User Authentication API" matches `auth_api.py`

2. **Automation Script → Test Case**
   - Extracts keywords from automation script names and content
   - Matches against test case names
   - Example: `test_login_automation.py` matches "Login Test" test case

3. **Keyword Extraction:**
   - Splits names/content into words
   - Filters words >3 characters
   - Removes punctuation
   - Case-insensitive matching

**Deep Scan Mapping (LLM Semantic):**

**Method:** LLM semantic analysis (accurate, comprehensive)

**Mapping Logic:**

1. **Extract Functions from Code:**
   - LLM parses code content to find all functions/methods/classes
   - Example: `login_api.py` → functions: `login()`, `logout()`, `validate_session()`

2. **Analyze Test Coverage:**
   - LLM reads test case names AND descriptions
   - Determines which functions each test actually validates
   - Example: "Test User Login API" → LLM maps to `login()` function

3. **Calculate Coverage:**
   - Counts covered functions vs total functions
   - More accurate than keyword matching
   - Identifies specific gaps: "logout() has no test coverage"

**Comparison:**

| Aspect | Quick Scan | Deep Scan |
|--------|-----------|-----------|
| **Mapping Method** | Keyword matching | LLM semantic understanding |
| **Granularity** | Module-level | Function-level |
| **Example** | "Login test" matches login_api.py | Login test covers login() but not logout() |
| **Accuracy** | Approximate (test count) | Precise (actual coverage) |
| **Speed** | Instant | 30-60 seconds |
| **Cost** | Free | ~$0.10-0.30 |

### Best Practices for Naming

**To ensure proper mapping, follow these conventions:**

**Test Case Names:**
```
Good Examples:
✅ "Test User Login API"         → Matches: login_api.py, auth.py
✅ "Validate Payment Processing" → Matches: payment.py, payment_service.py
✅ "Cart Checkout Flow"          → Matches: cart.py, checkout.py

Avoid:
❌ "TC001" (no keywords)
❌ "Test 1" (too generic)
```

**Automation Script Names:**
```
Good Examples:
✅ test_user_login.py            → Matches: "User Login Test"
✅ test_payment_processing.py   → Matches: "Payment Processing Test"
✅ checkout_automation.py        → Matches: "Checkout Test"

Avoid:
❌ script1.py (no keywords)
❌ auto.py (too generic)
```

**Why Two Scan Modes?**

**Quick Scan (Keyword Matching) Benefits:**
- ⚡ **Instant Results:** 1-2 seconds for any codebase size
- 💰 **Zero Cost:** No API charges
- 📊 **Good Proxy:** Test density correlates with quality
- 🔄 **Daily Use:** Run frequently without cost concerns
- 🌐 **Language-Agnostic:** Works for any programming language
- 📈 **Trend Tracking:** Monitor quality changes over time

**Deep Scan (LLM Semantic) Benefits:**
- ✅ **Accurate:** Validates actual function coverage, not assumptions
- 🔍 **Function-Level:** Identifies specific untested functions
- 📋 **Compliance:** Provides evidence for audits/regulatory requirements
- 🎯 **Targeted:** Shows exact gaps to fill before release
- 📊 **True Coverage:** Not just test count, but what's actually tested
- ⚠️ **Risk Detection:** Finds critical paths without tests

**Recommendation:**
- **Use Quick Scan:** For daily monitoring, sprint planning, cost-sensitive teams
- **Use Deep Scan:** Before major releases, for compliance, when accuracy matters

### Quality Score Improvement Strategies

**For Quick Scan Results:**

**Starting Score: <60 (High Risk)**
1. Add 3-5 test cases per code module (improve test density)
2. Upload automation scripts
3. Use descriptive test names with module keywords
4. Target: 70+ score

**Current Score: 60-74 (Acceptable)**
1. Increase automation coverage to >70%
2. Add tests for untested modules (shown in report)
3. Consider Deep Scan to find actual gaps
4. Target: 80+ score

**Current Score: 75-89 (Good)**
1. Automate remaining manual tests
2. Run Deep Scan to validate actual coverage
3. Add tests for edge cases
4. Target: 90+ score

**For Deep Scan Results:**

**If semantic coverage < test density:**
- Deep Scan revealed gaps Quick Scan missed
- Add tests for specific uncovered functions (shown in report)
- Focus on critical paths without coverage

**If semantic coverage ≈ test density:**
- Good correlation between test count and actual coverage
- Continue with Quick Scan for daily monitoring
- Use Deep Scan quarterly for validation

### Viewing Detailed Mapping

**Quick Scan Report Shows:**
- **Uncovered Modules:** Code files with no matching test keywords
- **Manual Tests:** Test cases with no matching automation keywords
- **Coverage Gaps:** Specific files needing attention

**Deep Scan Report Shows:**
- **Uncovered Functions:** Specific functions without test coverage
- **Function-to-Test Mapping:** Which tests cover which functions
- **Coverage Percentage per Module:** Detailed function-level metrics
- **Precise Recommendations:** Exact functions needing tests

**Example Report:**
```
Uncovered Modules:
- backend/utils/email_sender.py (No test found)
- frontend/components/header.js (No test found)

Manual Tests:
- "Email Notification Test" (No automation found)
- "Header Rendering Test" (No automation found)
```

**Action:** Create tests with matching keywords:
- Add test case: "Test Email Sender Utility"
- Add automation: `test_email_sender.py`

---

## 👤 Admin Features

Access admin features from the navigation bar:

### License Info (🔑 License)
- View trial status and days remaining
- Check product usage (evaluation limit: 2 products)
- Request evaluation extension
- View machine ID for support

### Setup Configuration (⚙️ Setup)
- **AI Provider Settings:**
  - Switch between OpenAI, GitHub Models, or Anthropic
  - **GitHub Models** recommended for evaluation (30-day free trial)
  - Update API keys securely (stored encrypted)
  - **Test API Key:** Validates authentication AND model access
    - Detects free tier limitations
    - Fetches your actual available models from the API
    - Prevents configuration errors before you start analyzing
  - **Model Selection:** Choose from models your API key can actually access
    - Dropdowns show only accessible models (fetched from API)
    - No guessing which models work with your key
  - Adjust token and daily limits for cost control
- **LDAP Security Configuration:**
  - Enable/disable LDAP authentication
  - Update LDAP server connection details
  - Configure user search base and filters
  - Map LDAP groups to application roles
  - Test LDAP connectivity before saving

---

## 💡 Tips & Best Practices

1. **Security Best Practices**
   - API keys encrypted in database (Fernet encryption)
   - Use separate API keys for evaluation vs production
   - **Enable LDAP** for enterprise-grade authentication
   - LDAP provides: centralized auth, password policies, audit trails
   - Change default admin password immediately
   - Use LDAP groups for role-based access control

2. **Try Demo First**
   - Click "🎬 Try Demo" to see the complete FlowSquad workflow
   - **Real AI analysis** runs during demo creation (not pre-loaded data)
   - Watch step-by-step progress as codebases are analyzed
   - Experience the full SDLC pipeline: Code → Requirements → Design → Tests → Quality
   - Demo includes 3 codebases, 15 test cases, sample requirements
   - Delete demo when ready for actual work

3. **Cost Management**
   - **GitHub Models:** 30-day free trial - best for evaluation
   - **OpenAI:** Start with daily limits to control costs
   - Use GPT-3.5 Turbo for faster/cheaper processing
   - GPT-4/GPT-4o provides better quality for complex analysis
   - Demo creation uses ~$1-3 in API costs (controlled budget)
   - Setup wizard tests API key AND verifies model access before you start

4. **Codebase Analysis**
   - Larger repositories take longer to analyze
   - Use specific branches to reduce analysis time
   - Demo includes 3 analyzed codebases as examples

5. **Requirements**
   - Clearer input requirements generate better outputs
   - Break large requirements into smaller chunks
   - Use sample requirements from demo folder for practice

6. **Test Cases & Automation**
   - Upload test cases in CSV/Excel format for batch import
   - Automation analysis supports: Selenium, Pytest, JUnit, Cypress, Playwright, etc.
   - Quality score improves with higher automation coverage (target: >70%)

7. **Quality Score Optimization**
   - **See "Understanding Quality Score Calculation" section above for detailed formula and examples**
   - Target 3-5 test cases per code module (test-to-code ratio)
   - Aim for >70% automation coverage
   - Use descriptive test/automation names for proper mapping (e.g., "Test User Login" not "TC001")
   - Follow naming best practices: include module keywords in test names
   - Quality score uses intelligent keyword matching (test names → code files)
   - Re-run quality score after improvements to track progress

8. **Evaluation Limits**
   - Maximum 2 products
   - 45-day trial period
   - Full feature access during evaluation

---

## 🚀 Enterprise Features (Coming Soon)

**FlowSquad Enterprise Edition** is currently under development. Based on evaluation user feedback, we're building a production-grade platform for teams of all sizes.

### Enterprise Roadmap

**Phase 1: Database Migration & Multi-Tenancy**
- ✅ PostgreSQL database (scalable, production-ready)
- ✅ Multi-tenant architecture (organization isolation)
- ✅ Advanced RBAC (roles: admin, product manager, developer, viewer)
- ✅ Unlimited products and users
- ✅ Data migration from evaluation version (zero data loss)

**Phase 2: Enterprise Features & Billing**
- ✅ Stripe billing integration (subscription management)
- ✅ License management (online validation, grace periods)
- ✅ MFA support (TOTP via QR code)
- ✅ Enhanced audit logging (track all configuration changes)
- ✅ Email notifications (license expiry, usage limits)
- ✅ Organization dashboard (usage metrics, cost breakdown)

**Phase 3: Advanced SDLC Pipeline - Complete Squad Workflow**
- ✅ **Requirements → Stories → Tasks End-to-End Flow**
  - **Step 1:** Refine high-level requirements with AI
  - **Step 2:** Auto-generate user stories from requirements
  - **Step 3:** Break stories into IT + Non-IT tasks for entire squad
  - **Step 4:** Estimate story points with confidence scoring
  - **Step 5:** Assign tasks to team members based on roles
- ✅ **User Story Breakdown** (IT + Non-IT stories)
  - **IT Stories:** Frontend, Backend, Integration, Database, API, DevOps, Security, Performance
  - **Non-IT Stories:** Training, Documentation, Marketing, Customer Success, Legal, Compliance
- ✅ **Task Generation** (Complete Squad Coverage)
  - **Development:** Frontend tasks, Backend tasks, Database scripts
  - **QA:** Test case creation, automation scripts, regression testing
  - **Design:** UI mockups, UX flows, design system updates
  - **DevOps:** Infrastructure, CI/CD pipelines, monitoring setup
  - **Documentation:** Technical docs, user guides, API documentation
  - **Security:** Threat modeling, penetration testing, compliance checks
- ✅ **Story Point Estimation** (with confidence scoring and AI justification)
- ✅ **Multi-Dimensional Analysis**
  - System documentation (PRDs, wikis, Confluence)
  - User flow analysis (React Router, state management)
  - Test framework detection (Jest, Pytest, Playwright)
  - Integration mapping (APIs, databases, message queues)
  - Industry-specific patterns (banking, healthcare, e-commerce)

**🎯 Why "FlowSquad"? Complete Squad Workflow**
- **Flow:** Seamless Requirements → Stories → Tasks → Execution pipeline
- **Squad:** Every team member (PM, Dev, QA, Design, DevOps, Docs) gets their tasks automatically
- **End-to-End:** From business idea to production-ready work items in minutes

**Phase 4: Integrations**
- ✅ **GitHub/GitLab/Bitbucket** (enhanced repository integration)
- ✅ **Jira/Linear/Azure Boards** (bidirectional sync)
  - Auto-create tickets from requirements
  - Sync status updates
  - Link test cases to tickets
- ✅ **Confluence/Notion** (auto-publish design docs)
- ✅ **Slack/Teams** (notifications, webhooks)
- ✅ **SSO/SAML** (enterprise authentication)

**Phase 5: Production Scale & Cloud Deployment**
- ✅ **Multi-Platform Deployment Options**
  - ✅ **Docker:** Containerized deployment available NOW in evaluation version (see Installation section)
  - 🔜 **Linux Native:** Installers for Ubuntu, RHEL, CentOS, Debian
  - 🔜 **Cloud-Ready:** AWS, Azure, GCP deployment guides
  - 🔜 **Kubernetes:** Auto-scaling, high availability, load balancing
  - 🔜 **On-Premise:** Air-gapped environments for regulated industries
- ✅ **Enhanced Security Features**
  - **MFA (Multi-Factor Authentication):** TOTP, SMS, email verification
  - **SSO/SAML:** Enterprise identity providers (Okta, Azure AD, Auth0)
  - **API Key Management:** Rotate keys, set expiration, usage tracking
  - **Encryption at Rest:** Database encryption with customer-managed keys
  - **Audit Trails:** Comprehensive logging of all user actions
  - **IP Whitelisting:** Restrict access to approved networks
- ✅ **Performance & Scale**
  - **Redis caching:** Sub-second response times
  - **Celery background jobs:** Async processing for large codebases
  - **Horizontal scaling:** Support 10,000+ concurrent users
  - **CDN integration:** Fast global access to static assets
- ✅ **Developer Experience**
  - **RESTful API:** Programmatic access for custom integrations
  - **Webhooks:** Real-time notifications to external systems
  - **CLI tool:** Command-line interface for automation
  - **Optional React frontend:** Modern UI (if customer demand exists)

### Key Enterprise Differentiators

**Why FlowSquad Enterprise?**
1. **Codebase-Aware AI** - Only platform that learns YOUR code (not generic AI)
2. **Complete SDLC Pipeline** - End-to-end workflow, not a point solution
3. **Quality Gates Built-In** - Completeness scoring, risk analysis, recommendations
4. **Enterprise Ready** - Multi-tenant, RBAC, audit trails, compliance support
5. **Proven Technology** - Evaluation version validates concept with real users

**vs. Competitors:**
- vs. **Jira:** AI-powered refinement + quality scoring (not just storage)
- vs. **TestRail:** Auto-generated test cases (not manual entry)
- vs. **GitHub Copilot:** Complete SDLC pipeline (not just code completion)
- vs. **Generic AI (ChatGPT):** Learns YOUR codebase (not generic responses)

### Migration from Evaluation to Enterprise

**Seamless Upgrade Path:**
1. ✅ **Data Migration Tool** - Export evaluation data → Import to enterprise
2. ✅ **Zero Downtime** - Gradual migration, both versions run in parallel
3. ✅ **Training Included** - Comprehensive onboarding for enterprise customers
4. ✅ **Early Adopter Incentives** - Special benefits for first enterprise customers
5. ✅ **Evaluation User Benefits** - Exclusive perks for evaluation users who upgrade

### How to Stay Updated

**Join the Enterprise Waitlist:**
- Visit: https://flowsquad.io/enterprise (coming soon)
- Email: support@flowsquad.com
- We'll notify you when enterprise features launch

**Beta Program:**
- Early enterprise customers get beta access
- Special benefits during beta period
- Direct input on feature priorities
- Dedicated Slack channel with engineering team

---

## 📞 Support

**Evaluation Extension:**
- Click "🔑 License" → "Request Extension"
- Email generated key to support@flowsquad.com

**Questions or Issues:**
- Email: support@flowsquad.com
- Include your machine ID (from License page)

**Upgrade to Enterprise:**
- Email: support@flowsquad.com
- Unlimited products, advanced features, on-premise deployment

---

## 🔄 Common Workflows

### Workflow 0: Quick Demo (First-Time Users)
1. Click "Try Demo" on dashboard
2. Explore e-commerce platform demo with complete data:
   - Code Analysis → View analyzed modules
   - Test Cases → Review test scenarios
   - QA Automation → See automation scripts
   - Quality Score → Check quality metrics
3. Use sample requirements from:
   - `demo-products/ecommerce-platform/requirement-doc.docx`
   - `demo-products/ecommerce-platform/quick-requirements.txt`
4. Test Requirements refinement and Design generation
5. Delete demo product when ready for real work

### Workflow 1: New Feature Development
1. Create product
2. Analyze existing codebase
3. Add feature requirements (paste or upload document)
4. Refine requirements with AI
5. Generate design document
6. Generate test cases
7. Upload or link automation repository
8. Review quality score and identify gaps

### Workflow 2: Legacy Code Understanding
1. Create product
2. Analyze codebase for complexity hotspots
3. Review entry points and dependencies
4. Upload existing test cases (CSV/Excel)
5. Analyze automation coverage
6. Run quality score analysis
7. Get prioritized refactoring recommendations

### Workflow 3: Complete SDLC Flow
1. Create product
2. Upload/paste requirements document
3. Refine requirements with AI-generated user stories
4. Generate technical design with architecture diagrams
5. Generate comprehensive test cases
6. Upload existing test cases or create new ones
7. Analyze automation repository
8. Calculate quality score (target: >75/100)
9. Iterate on gaps identified by quality analysis

### Workflow 4: Quality Improvement Sprint
1. Analyze existing codebase
2. Upload test cases (CSV/Excel)
3. Analyze automation scripts
4. Run quality score analysis
5. Identify untested modules (from quality report)
6. Generate test cases for high-risk modules
7. Review automation coverage recommendations
8. Re-analyze after improvements to track progress

---

## 🆘 Troubleshooting

### "Setup Required" Error

**Cause:** Setup not completed or database missing

**Solution:**
- Complete the setup wizard
- If issue persists, reinstall FlowSquad

### "Invalid API Key" Error

**Cause:** API key incorrect or expired

**Solution:**
1. Go to provider website and verify key
2. Generate new API key if needed
3. Use "Test API Key" button before saving
4. Check for typos or extra spaces

### "License Expired" Error

**Cause:** 45-day trial period ended

**Solution:**
1. Get machine request key from License Info
2. Contact support@flowsquad.com for extension

### "Product Limit Reached" Error

**Cause:** Already have 2 products (evaluation max)

**Solution:**
- Delete an existing product from the dashboard
- Product deletion removes database records AND uploaded documents folder
- If folder is locked (Windows), system retries automatically
- Contact support@flowsquad.com for increased limit

### Code Analysis Fails

**Possible Causes:**
- Unsupported language (see FAQ for 30+ supported languages)
- Large codebase (memory limits)
- Invalid file structure

**Solutions:**
1. Check language is supported (supports Python, Java, JavaScript, TypeScript, C#, and 25+ more)
2. Split large codebases into modules
3. Ensure ZIP contains source code (not binaries)
4. Check logs/ folder for detailed error messages
5. Review Language Support Matrix documentation

### LDAP Connection Fails (Security)

**Purpose:** LDAP provides enterprise-grade security (centralized auth, password policies, audit trails)

**Possible Causes:**
- LDAP server unreachable
- Incorrect bind credentials
- Port blocked by firewall
- Search base misconfigured

**Solutions:**
1. Verify LDAP host/port with IT department (standard: 389 for LDAP, 636 for LDAPS)
2. Test bind user credentials separately with LDAP browser tool
3. Check firewall allows outbound connections to LDAP server
4. Try without SSL first (port 389) for testing, then enable LDAPS (636) for production
5. Verify search base DN matches your Active Directory structure (e.g., DC=company,DC=com)
6. Test user search filter with sample username
7. Review LDAP logs in Setup Configuration

**Security Benefits of LDAP:**
- Centralized user management (no local passwords to maintain)
- Enforces corporate password policies automatically
- Provides audit trail of all login attempts
- Enables role-based access control via LDAP groups
- Single Sign-On (SSO) compatibility

### Quality Score Shows 0/100 or Low Score

**Possible Causes:**
- No codebases analyzed yet
- No test cases uploaded
- No automation scripts analyzed

**Solutions:**
1. Analyze at least one codebase first
2. Upload test cases (CSV/Excel) or generate from design
3. Analyze automation repository for coverage metrics
4. Use "Try Demo" to see realistic quality metrics (80-85/100)
5. Re-run quality analysis after adding data

**Quality Improvement Tips:**
- Target 3-5 test cases per code module
- Aim for >70% automation coverage
- Quality score updates automatically when you add/analyze data

---

## ❓ FAQ

**Q: Should I try the demo first?**  
A: Yes! Click "Try Demo" to instantly explore all features with a complete e-commerce platform example. It includes 13 code modules, 19 test cases, 14 automation scripts, and realistic quality metrics (80-85/100). Delete it when ready for actual work.

**Q: What file formats can I upload for test cases?**  
A: CSV and Excel (.xlsx, .xls) files. Required columns: title, priority, status, description. Optional: id, expected_result, test_steps.

**Q: How is the Quality Score calculated?**  
A: Three components: Code Coverage (50 points) = modules with tests / total modules, Automation Coverage (30 points) = automated tests / total tests, Quality Metrics (20 points) = code quality, security, maintainability. Target: >75/100 for production-ready code.

**Q: What automation frameworks are supported?**  
A: All major frameworks are detected: Selenium, Pytest, JUnit, TestNG, Cypress, Playwright, Mocha, Jest, Protractor, Robot Framework, Cucumber, SpecFlow, and more.

**Q: What programming languages are supported for analysis?**  
A: FlowSquad supports 30+ languages with detailed metrics including:
- **Web/Mobile:** JavaScript, TypeScript, Python, Java, C#, PHP, Ruby, Swift, Kotlin, Dart
- **Backend:** Python, Java, C#, Go, Rust, Scala, Node.js
- **Database:** SQL, PL/SQL, T-SQL
- **Scripting:** Bash, PowerShell, Perl
- **Legacy:** COBOL, Fortran, Assembly
- **Others:** C, C++, Objective-C, R, Lua, Groovy, and more

Language metrics show: lines of code, percentage distribution, complexity per language, and technology stack detection.

**Q: Can I delete test cases or automation data?**  
A: Yes. Each tab has a "Delete" button. For Test Cases, click "Delete Test Cases" to remove all uploaded tests. For Automation, use "Delete Automation" to clear analyzed scripts. This allows you to re-upload or re-analyze fresh data.

**Q: Is my code sent to OpenAI/GitHub?**  
A: Only when explicitly requested for analysis. Code analysis happens locally on your machine. LLM is used only for documentation generation and requirements analysis.

**Q: Which AI provider should I choose?**  
A: **OpenAI** (GPT-4) offers excellent quality and speed. **Anthropic** (Claude 3.5 Sonnet) provides superior reasoning for complex analysis. **GitHub Models** offers cost-effective access. All three are supported - choose based on your API access and budget.

**Q: Can I use offline?**  
A: No, evaluation version requires internet for LLM API calls. Enterprise version offers offline mode with local LLMs (Ollama support).

**Q: Should I enable LDAP?**  
A: Yes, if you have Active Directory. LDAP provides enterprise-grade security: centralized authentication, password policies, audit trails, and role-based access. For quick evaluation, default admin/admin works, but change the password for security.

**Q: Can multiple users use it simultaneously?**  
A: Yes. Evaluation version supports LDAP authentication for multiple users with centralized security. License is for evaluation purposes (single evaluator/organization). Enterprise version provides unlimited concurrent users with advanced LDAP/SSO and role-based access control.

**Q: What happens after 45 days?**  
A: Application stops allowing new products/analysis. Contact support@flowsquad.com for extension or upgrade.

**Q: Can I migrate to a different machine?**  
A: Yes, but license is MAC-address locked. Contact support@flowsquad.com for a new license.

**Q: Is my data secure?**  
A: Yes. All data stored locally in encrypted SQLite database. API keys encrypted with Fernet.

**Q: Can I backup my data?**  
A: Yes. Backup the FlowSquad installation folder, especially flowsquad_engine.db file.

---

## 🚀 Enterprise Features

Upgrade to Enterprise for:

**Unlimited Access:**
- ✅ Unlimited products
- ✅ Unlimited users
- ✅ No time restrictions

**Advanced Integrations:**
- ✅ Jira/Confluence full integration
- ✅ Bitbucket/GitHub Enterprise
- ✅ SSO/SAML authentication

**Enhanced AI:**
- ✅ Local LLM support (Ollama for offline use)
- ✅ All AI providers: OpenAI, Anthropic, GitHub, Azure OpenAI
- ✅ Custom model fine-tuning and prompt engineering
- ✅ Multi-model workflows (different models for different tasks)

**Enterprise Support:**
- ✅ Priority email & phone support
- ✅ Dedicated account manager
- ✅ On-premise deployment options

**Contact:** support@flowsquad.com

---

*For detailed technical documentation and integration guides, contact support@flowsquad.com*

**© 2026 FlowSquad - Evaluation Version**

