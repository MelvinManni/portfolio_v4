const blogPosts: Array<string> = [
  "https://www.smashingmagazine.com/2021/10/optimizing-nextjs-applications-nx/",
  "https://bejamas.io/discovery/static-site-generators/nextjs/",
  "https://bejamas.io/discovery/serverless-database/supabase/",
  "https://blog.openreplay.com/decentralized-app-with-vuejs-and-tezos/",
  "https://blog.openreplay.com/connecting-a-react-app-to-the-near-blockchain/",
  "https://blog.openreplay.com/pyscript-python-on-the-web/",
  "https://blog.openreplay.com/html-form-validation-with-pristinejs/",
  "https://buttercms.com/blog/express-js-error-handling/",
  "https://code.pieces.app/blog/scheduled-execution-in-express-using-cron-jobs",
  "https://adevait.com/react/building-crud-app-with-react-js-supabase",
  "https://code.pieces.app/blog/react-form-validation-formik-yup",
  "https://code.pieces.app/blog/getting-started-with-semantic-html",
  "https://code.pieces.app/blog/react-themes-with-styled-components",
  "https://code.pieces.app/blog/react-typescript-state-management-easy-peasy",
  "https://code.pieces.app/blog/building-a-fullstack-application-with-next-js-and-mongodb",
  "https://code.pieces.app/blog/serverside-rendering-with-express-and-ejs-templates",
  "https://dev.to/melvinmanni/react-a-peek-under-the-hood-part-1-257c",
  "https://dev.to/melvinmanni/a-dive-into-react-hooks-36g2",
  "https://dev.to/melvinmanni/deploying-react-app-with-router-on-netlify-1l7g",
  "https://dev.to/melvinmanni/using-doppler-in-a-react-firebase-application-4co6",
  "https://dev.to/melvinmanni/common-mistakes-you-might-make-using-the-near-sdk-as-and-assemblyscript-264c",
];

export const getLinkPreview = async (url: string) => {
  try {
    const response = await fetch(`https://lp-express-production.up.railway.app/metadata?url=${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default blogPosts;
