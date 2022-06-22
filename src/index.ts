import  { StaticWebsite } from '@dschro-1993/pulumi-provider';

const website = new StaticWebsite('elden-ring-wiki', {
  pathToContent: '../build',
});

export const domain = website.domain.domainName;
// ...
