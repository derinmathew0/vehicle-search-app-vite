import { ErrorBox } from '../ui';
export default function ErrorBanner({ message }: { message: string }) {
  if (!message) return null;
  return <ErrorBox role="alert">{message}</ErrorBox>;
}