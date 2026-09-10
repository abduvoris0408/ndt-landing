'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import DocumentPreviewModal from './DocumentPreviewModal'
import Logo from './Logo'

const DOCUMENTS = [
	{ src: '/shartnoma.jpg', key: 'registration' },
	{ src: '/certificate.jpg', key: 'itpark' },
] as const

export default function Footer() {
	const t = useTranslations('footer')
	const tNav = useTranslations('nav')
	const tAbout = useTranslations('about')
	const [preview, setPreview] = useState<{ src: string; alt: string } | null>(
		null,
	)

	const links = [
		{ href: '/services', label: tNav('services') },
		{ href: '/portfolio', label: tNav('portfolio') },
		{ href: '/about', label: tNav('about') },
		{ href: '/blog', label: tNav('blog') },
		{ href: '/privacy', label: tNav('privacy') },
	]

	return (
		<footer className='relative border-t border-border py-14'>
			<div className='container-app'>
				<div className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
					<div>
						<Link href='/' className='flex items-center'>
							<Logo className='h-10 w-auto' />
						</Link>
						<p className='mt-4 max-w-xs text-sm text-muted'>
							{t('description')}
						</p>
					</div>

					<div>
						<h4 className='font-mono text-xs uppercase tracking-wider text-muted'>
							{t('navTitle')}
						</h4>
						<div className='mt-4 flex flex-col gap-2.5'>
							{links.map(l => (
								<Link
									key={l.href}
									href={l.href}
									className='w-fit text-sm text-muted transition-colors hover:text-foreground'
								>
									{l.label}
								</Link>
							))}
						</div>
					</div>

					<div>
						<h4 className='font-mono text-xs uppercase tracking-wider text-muted'>
							{t('contactTitle')}
						</h4>
						<div className='mt-4 flex flex-col gap-2.5 text-sm text-muted'>
							<a
								href='mailto:info@nextdevteam.uz'
								className='w-fit hover:text-foreground'
							>
								info@nextdevteam.uz
							</a>
							<a
								href='tel:+998900994477'
								className='w-fit hover:text-foreground'
							>
								+998 90 099 44 77
							</a>
						</div>

						<h4 className='mt-6 font-mono text-xs uppercase tracking-wider text-muted'>
							{t('documentsTitle')}
						</h4>
						<div className='mt-4 flex items-center gap-3'>
							{DOCUMENTS.map(doc => (
								<button
									key={doc.src}
									type='button'
									onClick={() =>
										setPreview({
											src: doc.src,
											alt: tAbout(
												`documents.${doc.key}.alt`,
											),
										})
									}
									aria-label={tAbout(
										`documents.${doc.key}.alt`,
									)}
									className='glass relative h-14 w-10 shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80'
								>
									<Image
										src={doc.src}
										alt={tAbout(`documents.${doc.key}.alt`)}
										fill
										className='object-cover'
										sizes='40px'
									/>
								</button>
							))}
						</div>
					</div>
				</div>

				<div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row'>
					<span>
						© {new Date().getFullYear()} &quot;NEXT DEVELOPERS
						TEAM&quot; MCHJ. {t('rights')}
					</span>
					<Link href='/privacy' className='hover:text-foreground'>
						{tNav('privacy')}
					</Link>
				</div>
			</div>

			{preview && (
				<DocumentPreviewModal
					src={preview.src}
					alt={preview.alt}
					onClose={() => setPreview(null)}
				/>
			)}
		</footer>
	)
}
