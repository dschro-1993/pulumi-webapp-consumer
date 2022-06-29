import  { StaticWebsite } from '@dschro-1993/pulumi-provider';

const website = new StaticWebsite('test-wiki-1234567890', {
  pathToContent: '../build',
});

export const domain = website.domain.domainName;
// ...
