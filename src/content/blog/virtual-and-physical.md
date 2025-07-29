---
title: "I was tired of hearing 'it works on my machine'"
publishDate: 2014-02-23
description: "Microsoft's free virtual machines solved our cross-browser testing headaches. No more hardware zoo, no more licensing issues, just isolated environments ready to use."
keywords: "virtual machines, browser testing, cross-browser testing, Microsoft VMs, web testing, testing environments"
---

I was tired of hearing "it works on my machine." Every time we found a bug that only appeared in certain browsers or operating systems, we'd scramble to find someone with the right setup to reproduce it. Sometimes we'd have to borrow laptops from other teams, or worse, just hope the bug wasn't critical enough to worry about.

The problem was that testing across different environments required maintaining a hardware zoo - multiple computers with different operating systems, various browser versions, and all the licensing headaches that came with it. It was expensive, time-consuming, and frankly, a pain to manage.

Then I discovered Microsoft's free virtual machine offerings for browser testing. They provide Windows VMs with different browsers pre-installed, ready to use. No licensing issues, no driver compatibility problems, no need to maintain physical hardware for each configuration.

Each VM gives you an isolated, reproducible environment that you can create for specific test scenarios, destroy when testing completes, and recreate with identical configurations whenever you need them. You can even share them across team members for consistent results.

Instead of hoping bugs would be caught by users in different environments, we could now systematically verify behaviour across the actual environments our users encountered. Legacy browser compatibility, OS-specific rendering differences, performance testing across configurations - all of it became possible without the hardware overhead.

What I ended up doing was integrating these VMs into our testing workflows. The barrier to comprehensive browser testing dropped significantly. We could finally move beyond "works on my machine" to "works everywhere our users are."

Virtual machines don't just solve the technical problem of cross-browser testing - they solve the human problem of not being able to test what you can't easily access. Sometimes the best tools are the ones that make the impossible possible.
