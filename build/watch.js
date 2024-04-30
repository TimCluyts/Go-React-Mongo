const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

async function watch() {
	let ctx = await esbuild.context({
	  entryPoints: ["frontend/Application.tsx", "frontend/style.scss"],
	  outdir: ".build/assets",
	  minify: false,
	  bundle: true,
	  loader: { ".ts": "ts" },
	  plugins: [sassPlugin()],
	});
	await ctx.watch();
	console.log('Watching...');
}
watch();