---
title: "Bitwarden"
description: "Internal password and secrets management"
tags: [internal-tools, security, credentials]
draft: false
order: 3
slug: "Bitwarden"
---

## 🔑 Overview

We use **Bitwarden** as our secure password and secrets manager for Schrödinger Hat.
Our instance is hosted in Europe at:

**Link:** [vault.bitwarden.eu](https://vault.bitwarden.eu/#/login)

This ensures all our data is stored within the EU, following stricter privacy and data protection regulations.

## 🗂 Structure

Bitwarden is organized into **Collections** to group related credentials.
Each collection can have **sub-collections** if needed.

**Main collections include:**
- **Social** — Credentials for our organization’s social accounts.
- **Media** — Credentials for our organization's media accounts.
- **Events** — Access to platforms and tools used for organizing events (e.g., OSDay).
- **E-Commerce** — Shop backend, payment gateways, and related services.
- **DevOps** — Cloud infrastructure, hosting providers, CI/CD services.
- **Admin** — Legal, finance, and administrative platforms.

## 👥 Access Control

We manage access using **Groups** that are assigned to specific collections.

**Examples:**
- **Designers** → Access to the *Media/Design* collection.
- **Maintainers-Cloud** → Access to *DevOps* collections.
- **Events** → Access to *Events* and relevant social media collections.

## 🛠 How to Get Access

1. **Create a Bitwarden account** using your organization email.
2. **Contact the admin** to request access to the required collections.
   - Current admin: **Gabriele Puliti**
3. Specify which role or project you are working on, so we can assign the right group.

## 💰 Billing & Discounts

As a non-profit, Schrödinger Hat benefits from a **25% discount** on Bitwarden billing for our users.

## 📌 Best Practices

- **Never** store personal passwords here, only credentials relevant to Schrödinger Hat, this to prevent data loss in your side.
- **Do not** share credentials outside the organization.
- **Use the browser extension** for quick and secure logins = https://bitwarden.com/download/
- **Enable two-factor authentication** on your Bitwarden account.

## 📚 Resources

- [Official Bitwarden Documentation](https://bitwarden.com/help/)
- [Browser Extension Download](https://bitwarden.com/download/)
- [Mobile Apps](https://bitwarden.com/download/#mobile)
