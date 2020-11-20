---
date: 2020-1-8
title: Limelight Gaming
subtitle: Secure Document Store
images:
  - src: /img/document-store.png
    alt: The document store's document model, designed to make use of current best practices.
  - skip
  - src: /img/guidelines-deploy.png
    alt: The GitHub actions deployment log for the built documents. 
---
One of my most used pieces of software to date is the secure document store.
This Node.JS application was written to securely store documents,
providing selective access to users based on various criteria, such as group filtering.
Access to individual documents is controlled by an ACL,
with groups also having individual permission nodes for audit and management purposes.


These are all passed through to a backend secured with current best practices,
such as the use of non-incremental IDs and using external authentication sources
to remove the requirement for storing passwords locally.


Furthermore, access was also built into the application for automatic updating of documents from external sources,
such as our staff guidelines, which are automatically built from asciidoc source files, with built files deployed to the store.