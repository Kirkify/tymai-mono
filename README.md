# Project One Monorepo

This repository is a monorepo containing multiple applications and their supporting libraries for the "project-one" project. It is designed to streamline development and code sharing across related applications.

## Introduction

The monorepo currently includes two server applications:

- **project-one-server-one**: This application hosts the AI pull request reviewer, a feature dedicated to automating pull request reviews. *(Note: This name will be updated to something more meaningful in the future.)*
- **project-one-server-two**: Another server application within the "project-one" project.

The AI pull request reviewer is a core feature of "project-one-server-one", aimed at enhancing development efficiency by automating the review process for pull requests.

---

## Repository Structure

The monorepo is organized into two main directories: `apps` for application source code and `libs` for libraries.

- **`apps/`**: Contains the source code for the applications.
  - `project-one-server-one/`: The server application that includes the AI pull request reviewer.
  - `project-one-server-two/`: A separate server application within the "project-one" project.

- **`libs/`**: Contains libraries used by the applications, structured under the `project-one/server/` namespace.
  - `project-one/server/server-one/`: Libraries specific to "project-one-server-one". This is where most of the code for the AI pull request reviewer resides.
  - `project-one/server/server-two/`: Libraries specific to "project-one-server-two". This is where code exclusive to "project-one-server-two" is housed.
  - `project-one/server/_shared/`: Shared libraries used by both "project-one-server-one" and "project-one-server-two".

---

## Applications

### project-one-server-one

This application includes the AI pull request reviewer, which automates the review process for pull requests. Its primary code, including logic specific to this feature, is located in `libs/project-one/server/server-one/`. This app will integrate with external services (e.g., a version control system) to fetch and analyze pull request data.

### project-one-server-two

This is another server application within the "project-one" project. It shares common libraries with "project-one-server-one" from `libs/project-one/server/_shared/`, but has its own distinct functionality. Libraries exclusive to this application are located in `libs/project-one/server/server-two/`.

---

## Libraries

The `libs` folder is organized to balance code reuse and separation of concerns:

- **`project-one/server/server-one/`**:
  - Contains libraries exclusive to "project-one-server-one".
  - Houses the majority of the AI pull request reviewer's code, such as review algorithms, integration logic, and utilities specific to this application.

- **`project-one/server/server-two/`**:
  - Contains libraries exclusive to "project-one-server-two".
  - Houses code specific to "project-one-server-two", such as unique features, utilities, or integrations not shared with other applications.

- **`project-one/server/_shared/`**:
  - Contains libraries shared between "project-one-server-one" and "project-one-server-two".
  - Includes common utilities, configurations, or modules that both applications rely on.

---

## AI Pull Request Reviewer

The AI pull request reviewer is a dedicated feature of "project-one-server-one". It is designed to automate the review process for pull requests, improving development workflows. Most of its implementation is located in `libs/project-one/server/server-one/`, with any reusable components or utilities shared with "project-one-server-two" placed in `libs/project-one/server/_shared/`.

---
