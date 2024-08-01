import Link from 'next/link';

export default function AccountSetupPage() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/account/login" className="bg-blue-500 p-1 rounded-md flex justify-center text-white">Log In</Link>
      <Link href="/account/signup" className="bg-blue-500 p-1 rounded-md flex justify-center text-white">Sign Up</Link>
    </div>
  );
}
