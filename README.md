# Issue: Debugger in vs-code does not stop at breakpoint but elsewhere

I have created a vanilla project with vue3 + vitest + @testing-library/vue + node 18.18.2 or 20.11.1. However, setting and debugging breakpoints in vs-code on windows 11 does not work. I am using vue single file components ( aka .vue files )

The project was created with `npm create vue@latest` with standard options.

## How to reproduce

1. Check out repo
2. `npm install`
3. Set breakpoint in [SimpleComponent.vue](./src/components/SimpleComponent.vue) at line with `console.log`statement
4. Run tests in debug mode

Result:

![Bug](/bug.png)

## Notes

- Issue goes away when removing `<style>...</style>` section from [SimpleComponent.vue](./src/components/SimpleComponent.vue)
- Issue goes away ( meaning, debugger break is correctly displayed ) when setting same breakpoint and starting vite dev server in debug mode. So it does not seem to be vite itself

## See also

- Created a bug report here: https://github.com/vitest-dev/vitest/issues/5380
