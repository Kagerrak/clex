import { Badge } from "@/components/ui/badge";

export const VisionMissionModal = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Badge className="bg-blue-100 text-blue-900 mb-2">Vision</Badge>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          To be the leading tech-driven customs brokerage and logistics firm in
          the Philippines, recognized for our efficiency, reliability, and
          client-centric approach, facilitating seamless global trade for
          businesses of all sizes.
        </p>
      </div>

      <div className="space-y-2">
        <Badge className="bg-blue-100 text-blue-900 mb-2">Mission</Badge>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          To revolutionize customs brokerage and logistics in the Philippines by
          harnessing advanced technology and delivering unparalleled customer
          service, ensuring smooth and expedited trade operations for our
          clients.
        </p>
      </div>
    </div>
  );
};

export const CoreValuesModal = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
        Core Values: CLEX
      </h3>

      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Badge className="bg-yellow-100 text-yellow-900">01</Badge>
            CLIENT-CENTRIC
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            We put our clients at the heart of everything we do. Their success
            is our success, and we strive to exceed their expectations in every
            interaction.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Badge className="bg-yellow-100 text-yellow-900">02</Badge>
            LEADERSHIP IN INNOVATION
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            We lead the way in adopting and implementing cutting-edge
            technologies to revolutionize the customs brokerage industry.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Badge className="bg-yellow-100 text-yellow-900">03</Badge>
            EFFICIENCY IN EXECUTION
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            We are committed to optimizing processes and delivering swift,
            accurate services that save time and resources for our clients.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Badge className="bg-yellow-100 text-yellow-900">04</Badge>
            EXCELLENCE IN ALL ASPECT
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            We pursue excellence in every facet of our operations, from customer
            service to compliance, ensuring the highest standards of quality and
            professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ContactModal = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
        Contact Us
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900 dark:text-blue-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-700 dark:text-gray-300">
            Block 2 Lot 5, Dreamland, Hagonoy,
            <br />
            Taguig City, NCR, PH, 1630
          </p>
        </div>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900 dark:text-blue-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="text-gray-700 dark:text-gray-300">
            +63-919-096-CLEX(2539)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900 dark:text-blue-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:info@cloudexpresscb.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            info@cloudexpresscb.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900 dark:text-blue-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <a
            href="https://www.cloudexpresscb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            www.cloudexpresscb.com
          </a>
        </div>
      </div>
    </div>
  );
};
