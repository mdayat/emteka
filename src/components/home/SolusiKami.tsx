import Image from "next/image";

import BranchingImage from "@images/home/branching.png";
import FeedbackImage from "@images/home/feedback.png";
import TrackingImage from "@images/home/tracking.png";

export function SolusiKami() {
  return (
    <div className="mt-14 mx-8 lg:w-[868px] lg:mx-auto">
      <article className="mb-8">
        <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 lg:text-[32px] lg:mb-6">
          Solusi Kami
        </h2>

        <p className="text-neutral-800 text-center text-sm lg:text-base">
          Dalam menghadapi tantangan tersebut, Emteka hadir sebagai solusi yang
          inovatif untuk membantu memetakan kemampuan serta strategi
          pembelajaran yang tepat dalam meningkatkan kemampuan Matematika Anda
        </p>
      </article>

      <div className="grid gap-y-6 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-6">
        <article className="card-transition shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4">
          <Image
            src={BranchingImage}
            alt="Fitur Branching"
            className="object-cover object-center w-[70px] h-[70px] mb-4 lg:w-[80px] lg:h-[80px]"
          />

          <h3 className="text-neutral-900 font-semibold mb-2 lg:text-lg">
            Fitur Branching
          </h3>

          <p className="text-neutral-800 text-sm lg:text-base">
            Mengarahkan Anda melalui penyesuaian konten dan tantangan dari
            asesmen berdasarkan tingkat kemampuan Anda
          </p>
        </article>

        <article className="card-transition shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4">
          <Image
            src={TrackingImage}
            alt="Fitur Tracking"
            className="object-cover object-center w-[70px] h-[70px] mb-4 lg:w-[80px] lg:h-[80px]"
          />

          <h3 className="text-neutral-900 font-semibold mb-2 lg:text-lg">
            Fitur Tracking
          </h3>

          <p className="text-neutral-800 text-sm lg:text-base">
            Melacak dan memantau kemajuan Anda dalam mempelajari Matematika
            selama mengerjakan asesmen
          </p>
        </article>

        <article className="card-transition shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4">
          <Image
            src={FeedbackImage}
            alt="Fitur Feedback"
            className="object-cover object-center w-[70px] h-[70px] mb-4 lg:w-[80px] lg:h-[80px]"
          />

          <h3 className="text-neutral-900 font-semibold mb-2 lg:text-lg">
            Fitur Feedback
          </h3>

          <p className="text-neutral-800 text-sm lg:text-base">
            Memberikan pemetaan menyeluruh tentang kemampuan Anda yang mencakup
            pendangan secara terperinci
          </p>
        </article>
      </div>
    </div>
  );
}
