'use client'

import ProfileCard from '@/components/reactbits/ProfileCard'
import { personalTrainerConfig, generateWhatsAppUrl } from '@/config/personal-trainer'

export default function JoelmaProfileCard() {
  return (
    <div className="w-full flex justify-center">
      <ProfileCard
        avatarUrl={personalTrainerConfig.profileImage}
        miniAvatarUrl={personalTrainerConfig.profileImage}
        name={personalTrainerConfig.fullName}
        title={personalTrainerConfig.title}
        handle={personalTrainerConfig.instagram}
        status="Online"
        contactText="Fale comigo"
        showUserInfo
        enableTilt
        iconUrl="/icons/haltere-mask.svg"
        behindGradient="radial-gradient(circle at var(--pointer-x) var(--pointer-y),rgba(84,210,216,.35) 0%,rgba(0,0,0,0) 70%)"
        innerGradient="linear-gradient(145deg,#0f172a99 0%,#54d2d844 100%)"
        onContactClick={() => {
          window.open(generateWhatsAppUrl('general'), '_blank')
        }}
      />
    </div>
  )
} 