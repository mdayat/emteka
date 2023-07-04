# Emteka Repo Documentation

## Trunk-Based Development Best Practices

- Breakdown your work into smaller "batches" and make it independent from each other
- Avoid working on miltiple batches as it can leads to a "[downward spiral](https://dictionary.cambridge.org/dictionary/learner-english/a-downward-spiral)" where code reviewers procastinate with large code reviews due to its complexity and its dimnished the benefits of trunk-based development
- Before merging to the trunk, ask someone on the team or another team to review your code right then. If no one can, make sure your code follows the standards and meets the requirements
- Make sure to always test your code before commiting or merging to the trunk
- Once a branch merged, make sure to delete it right then. Removing inactive branch will be beneficial for teams to know the visibility of the progress

---

## Commit Naming

Please write a clear and concise commit message, and follow the conventions below:

- For _commits_ related to feature creation, prefix it with `feat:`. (e.g. `feat: create useAuth hook`)
- For _commits_ related to bug fixing, prefix it with `fix:`. (e.g. `fix: add missing props in useAuth hook`)
- For _commits_ related to code refactoring, prefix it with `refactor:`. (e.g. `refactor: remove unnecessary conditional statement in useAuth hook`)
- For _commits_ related to code testing, prefix it with `test:`. (e.g. `test: create unit test for useAuth hook`)
- For _commits_ related to document creation, prefix it with `docs:`. (e.g. `docs: create repo documentation`)
- For _commits_ related to "grunt tasks" [see references on [stackoverflow](https://stackoverflow.com/questions/26944762/when-to-use-chore-as-type-of-commit-message) and [github](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)], prefix it with `chore:`. (e.g. `chore: install husky and prettier`)

---

## Branch Naming
Branch names consist of branch types, ticket numbers, and names.

- For _branch_ related to feature creation, prefix it with _ticket number_ (`EMT-22`), followed by _branch types_ (`feature`), and its names (`signup`) and separate each of them with `/`. (e.g. `EMT-22/feature/signup`)
- For _branch_ related to bug fixing, prefix it with _ticket number_ (`EMT-22`), followed by _branch types_ (`fix`), and its names (`signup-validation`) and separate each of them with `/`. (e.g. `EMT-22/fix/signup-validation`)
- For _branch_ related to testing, prefix it with _ticket number_ (`EMT-22`), followed by _branch types_ (`test`), and its names (`signup`) and separate each of them with `/`. (e.g. `EMT-22/feature/signup`)
---

## Pull Request Naming
Pull request consist of two parts:
1. Name: pull request's name should give an overview of what the pull request is about,
> <details>
>   <summary>Example</summary>
>
>   ### fix: fixing signup validation
> </details>

2. Description: pull request's description should tell reviewers about which problem/ticket you are working on, what have you done, and what the reviewers should know.
>  <details>
>    <summary>Example</summary>
>
>    ### Ticket:
>    Your ticket link
>
>    ### What has changed:
>    1. Fix signup validation
>    2. Add error handling at signup validation
>
>    ### What reviewer should know
>    The failed validation was caused by missing `required` property on the input tag
>    ```html
>      <input required></input>
>    ```
>  </details>