# Demonstrate breakpoint bug with vitest and vue files

- This project was created with npm create vite@latest

## Issue: Debugger in vs-code does not stop at breakpoint but elsewhere

## How to reproduce

1. Check out repo
2. `npm install`
3. Set breakpoint in [SimpleComponent.vue](./src/components/SimpleComponent.vue) at line with `console.log`statement
4. Run tests in debug mode

Result:

![Bug](/bug.png)

## Notes

- Issue goes away when removing `<script>...</script>` section from [SimpleComponent.vue](./src/components/SimpleComponent.vue)
