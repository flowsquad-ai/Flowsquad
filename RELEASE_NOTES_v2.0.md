# 🚀 FlowSquad v2.0 — Enterprise Release

AI-powered SDLC intelligence — from code to decisions.

---

## 📥 Download

Choose the package that matches your environment:

| Platform | Package | Notes |
|---|---|---|
| 💻 Windows Portable | `FlowSquad-Win-Portable-v2.0.zip` | No install required, double-click to run |
| 🪟 Windows Installer | `FlowSquad-Win-Installer-v2.0.zip` | Full installer with Start Menu & uninstaller |
| 🐧 Linux Standalone | `FlowSquad-Linux-Standalone-v2.0.tar.gz` | Start/stop scripts, no root required |
| 🐧 Linux Systemd | `FlowSquad-Linux-Systemd-v2.0.tar.gz` | Managed system service, installs to `/opt/flowsquad` |
| 🐳 Docker | `FlowSquad-Docker-v2.0.zip` | Docker Compose + deploy scripts |
| ☸️ Kubernetes Manifests | `FlowSquad-Kubernetes-v2.0.zip` | Raw YAML manifests |
| ☸️ Kubernetes Helm | `flowsquad-2.0.tgz` | Helm chart |

---

## 💻 Windows Portable (Quick Start — Recommended for Evaluation)

1. Download `FlowSquad-Win-Portable-v2.0.zip`
2. Extract the ZIP to any folder
3. Run `FlowSquad-Setup.exe` (or `Start-FlowSquad.bat`)
4. Open browser → `http://localhost:5000/`
5. Complete the Setup Wizard (LLM provider, database, first product)

> **Note:** Windows may show a security warning because the application is not yet code-signed.
> Click **More info → Run anyway** to proceed.

---

## 🪟 Windows Installer

1. Download `FlowSquad-Win-Installer-v2.0.zip`
2. Extract the ZIP
3. Run `FlowSquad-Setup.exe`
4. Follow the installer wizard — creates Start Menu shortcut and Add/Remove Programs entry
5. Open browser → `http://localhost:5000/`
6. Complete the Setup Wizard

> **Note:** Windows may show a security warning because the application is not yet code-signed.
> Click **More info → Run anyway** to proceed.

---

## 🐧 Linux Standalone

1. Download `FlowSquad-Linux-Standalone-v2.0.tar.gz`
2. Extract: `tar -xzf FlowSquad-Linux-Standalone-v2.0.tar.gz`
3. `cd FlowSquad-Linux-Standalone-v2.0`
4. `chmod +x start-flowsquad.sh && ./start-flowsquad.sh`
5. Open browser → `http://localhost:5000/`
6. Complete the Setup Wizard

> No root or installation required. Full instructions in the [Installation Guide](https://flowsquad.ai/docs/install-guide).

---

## 🐧 Linux Systemd (Production Service)

1. Download `FlowSquad-Linux-Systemd-v2.0.tar.gz`
2. Extract: `tar -xzf FlowSquad-Linux-Systemd-v2.0.tar.gz`
3. `cd FlowSquad-Linux-Systemd-v2.0`
4. `sudo ./install.sh` — creates `flowsquad` system user, installs to `/opt/flowsquad`, enables systemd service
5. FlowSquad starts automatically — open browser → `http://localhost:5000/`
6. Complete the Setup Wizard

> Full instructions in the [Installation Guide](https://flowsquad.ai/docs/install-guide).

---

## 🐳 Docker (Teams / Server Deployment)

1. Download `FlowSquad-Docker-v2.0.zip`
2. Extract the package
3. Run: `docker compose up -d`
4. Open browser → `http://localhost:5000/`
5. Complete the Setup Wizard

```bash
# Quick start
unzip FlowSquad-Docker-v2.0.zip
cd FlowSquad-Docker-Protected-v2.0
chmod +x deploy.sh && ./deploy.sh
```

> Full instructions in the [Installation Guide](https://flowsquad.ai/docs/install-guide).

---

## ☸️ Kubernetes — Helm Chart

1. Download `flowsquad-2.0.tgz`
2. Deploy with Helm:

```bash
helm install flowsquad flowsquad-2.0.tgz \
  --namespace flowsquad \
  --create-namespace \
  -f values.yaml
```

> Full instructions in the [Installation Guide](https://flowsquad.ai/docs/install-guide).

---

## ☸️ Kubernetes — Raw Manifests

1. Download `FlowSquad-Kubernetes-v2.0.zip`
2. Extract and apply:

```bash
unzip FlowSquad-Kubernetes-v2.0.zip
cd FlowSquad-Kubernetes-v2.0
kubectl apply -f manifests/
```

> Full instructions in the [Installation Guide](https://flowsquad.ai/docs/install-guide).

---

## ⚡ What FlowSquad Can Do

From your codebase, FlowSquad generates:

- **Requirements** — Refine vague ideas into complete, acceptance-criteria-ready stories
- **Epics, User Stories & Tasks** — Full backlog generation grounded in your actual code
- **Solution Designs** — Architecture insights, API contracts, data flow diagrams
- **Test Cases** — Scenarios that match your existing test frameworks and patterns
- **Quality Score** — Semantic code quality, complexity, and risk indicators
- **Security Scan** — OWASP Top 10 analysis against your codebase
- **AskProduct** — Natural language Q&A over your entire product knowledge base

---

## 🆕 What's New in v2.0

- **Windows Installer** — full NSIS installer with Start Menu shortcut, autostart, and uninstaller
- **Linux Standalone** — self-contained package with start/stop scripts, no root required
- **Linux Systemd** — production server deployment with managed systemd service
- **Kubernetes / Helm chart** — production-grade deployment with ingress and TLS support
- **Enterprise RBAC** — unlimited products, Product Admin role, team member management
- **SSO** — LDAP/Active Directory, SAML 2.0 (Okta, Azure AD, Keycloak, ADFS), OAuth2
- **MFA** — TOTP (authenticator app) and email one-time password
- **Jira & Confluence integration** — push artifacts, import documentation
- **Per-product LLM configuration** — different provider/model per product and operation
- **Ollama support** — fully local, air-gapped inference (no API key required)
- **Audit logging** — immutable event log for compliance (SOC 2 / HIPAA / GDPR)
- **PostgreSQL & MySQL** — production database support (SQLite still available for dev)

---

## ⚠️ Notes

- Windows binaries are not yet code-signed — Windows Defender SmartScreen will warn on first run. Click **More info → Run anyway**.
- Default login after fresh install: `admin` / `admin` — **change this immediately** in the Setup Wizard.
- The evaluation tier allows **1 product** and a **30-day license**. Contact [support@flowsquad.ai](mailto:support@flowsquad.ai) for an Enterprise license.

---

## 📘 Documentation

Full documentation is available at **[flowsquad.ai/docs](https://flowsquad.ai/docs)**:

- [Installation Guide](https://flowsquad.ai/docs/install-guide) — deploy on Windows, Linux, Docker, or Kubernetes
- [Setup Guide](https://flowsquad.ai/docs/setup-guide) — complete the Setup Wizard step-by-step
- [Admin Guide](https://flowsquad.ai/docs/admin-guide) — manage products, users, and licensing
- [User Guide](https://flowsquad.ai/docs/user-guide) — master every workflow tab
- [Integration Guide](https://flowsquad.ai/docs/integration-guide) — Jira, Confluence, SSO, SCM
- [Security Reference](https://flowsquad.ai/docs/security-guide) — TLS, encryption, RBAC, compliance

---

## 📧 Support

[support@flowsquad.ai](mailto:support@flowsquad.ai)
