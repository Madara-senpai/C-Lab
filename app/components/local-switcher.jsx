"use client"; // Ensures this component is treated as a client-side component in Next.js.

import { useRouter, usePathname } from "next/navigation"; // Import usePathname to get the current route.
import { useLocale } from "use-intl"; // Hook to get the current locale. Ensure `use-intl` is configured.
import { useTransition } from "react"; // Hook to manage transitions and display pending states.

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition(); // Manage transition states.
  const router = useRouter(); // Get the router instance.
  const pathname = usePathname(); // Get the current route.
  const currentLocale = useLocale(); // Get the currently active locale.

  // Handles changes in the language selection dropdown.
  const handleLocaleChange = (event) => {
    const selectedLocale = event.target.value; // Get the selected locale from the dropdown.

    startTransition(() => {
      // Replace only the locale in the current path instead of redirecting to home.
      const newPath = pathname.replace(`/${currentLocale}`, `/${selectedLocale}`);
      router.replace(newPath); // Replace the current route with the new locale's route.
    });
  };

  return (
    <label htmlFor="locale-switcher" className="border-2 rounded">
      <p className="sr-only">Change language</p>

      <select
        id="locale-switcher"
        value={currentLocale} // Set the current locale as the selected value.
        onChange={handleLocaleChange} // Handle locale change.
        disabled={isPending} // Disable if a transition is in progress.
        className="p-2 button text-n-1/50 transition-colors hover:text-n-1"
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="tkm">Turkmen</option>
      </select>
    </label>
  );
}
