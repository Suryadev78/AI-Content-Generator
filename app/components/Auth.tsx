import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Auth() {
  return (
    <div>
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
}
