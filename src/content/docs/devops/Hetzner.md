---
title: "VPS Configuration"
description: ""
tags: []
draft: false
order: 2
slug: "Hetzner"
---

The machine has two main accounts: `root` and `sh`.

The first should only be used in cases of extreme necessity. While the second is the official account to access and manage the server. Both accounts are sudoers.

To access the accounts, two SSH keys have been created to access without using a password.

On the sh account, a K3s instance has been started, a lightweight Kubernetes usually used on single-instance servers or small machines. The process was executed through the [K3sup](https://github.com/alexellis/k3sup) project which allows for quick and easy configuration.

## Kubernetes

### Flux

To manage releases and updates of applications within the cluster, it was decided to adopt a GitOps approach using Flux, a tool belonging to the CNCF landscape for GitOps management of Kubernetes clusters.

A private GitHub repository (<https://github.com/Schroedinger-Hat/sh-cluster-fleet>) was therefore created where the declarations of applications and services will need to be inserted.

Please refer to the README.md present on the repository page for any considerations.

## Grafana - WIP

Access the vault and search for the note: .kubeconfig - SH server
You'll find the kubeconfig and password to access grafana along with the command to do port forwarding locally.

In the future, there will be public access via SSO