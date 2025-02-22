import {
  BaseTemplateEmail,
} from '@mn/project-one/server/shared/modules/email';

export const TestCreatedEmail = ({
  username,
}: {
  username: string;
}) =>
  BaseTemplateEmail({
    body: 'Please enjoy the new test that you created.',
    title: 'A New Test Has Been Created.',
    username,
    heading: "Is it you we're looking for?",
    paragraph: 'Please confirm your test by clicking the button below',
    actionUrl: `test.com`,
    actionDisplay: 'View Test',
    footer: `If you don't want to see your test, you can safely ignore this email.`,
  });
