import * as layouts from '@payloadcms/next/layouts';
import * as views from '@payloadcms/next/views';

console.log('Layouts:', Object.keys(layouts));
console.log('Views:', Object.keys(views));

if (layouts.RootLayout) {
  console.log('RootLayout found');
} else {
  console.log('RootLayout NOT found');
}

if (views.RootPage) {
  console.log('RootPage found');
} else {
  console.log('RootPage NOT found');
}
