import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-gray-400 text-lg mb-4">
            엔터프라이즈를 위한 스테이블코인 오케스트레이션 플랫폼
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            SCOPE
          </h1>
          <p className="text-gray-500 text-xl mb-12">
            by Lambda256
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all glow"
          >
            데모 요청하기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="p-8 rounded-2xl bg-red-950/20 border border-red-900/30">
              <h3 className="text-red-400 font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center mr-3">✕</span>
                기존 정산의 한계
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <div>
                    <strong className="text-gray-300">느린 정산</strong>
                    <p className="text-sm">D+3~7일, 자금이 묶이는 시간</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <div>
                    <strong className="text-gray-300">불투명한 흐름</strong>
                    <p className="text-sm">정산 과정 추적 불가, 분쟁 시 확인 어려움</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <div>
                    <strong className="text-gray-300">높은 수수료</strong>
                    <p className="text-sm">다단계 중개 구조로 인한 비용 증가</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <div>
                    <strong className="text-gray-300">글로벌 확장 한계</strong>
                    <p className="text-sm">국가별 상이한 정산 시스템, 환전 비용</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-900/30">
              <h3 className="text-emerald-400 font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center mr-3">✓</span>
                SCOPE의 해결책
              </h3>
              <p className="text-gray-300 mb-6">
                기존 결제 경험은 그대로 유지하면서,<br />
                백엔드 정산 레이어만 온체인으로 전환합니다.
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">⚡</span>
                  <div>
                    <strong className="text-gray-300">실시간 정산</strong>
                    <p className="text-sm">D+0부터 고객사 정책에 맞춰 유연하게</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">🔍</span>
                  <div>
                    <strong className="text-gray-300">완전한 투명성</strong>
                    <p className="text-sm">모든 자금 흐름 온체인 추적 가능</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">💰</span>
                  <div>
                    <strong className="text-gray-300">비용 절감</strong>
                    <p className="text-sm">중개 단계 최소화, 수수료 구조 개선</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3">🌏</span>
                  <div>
                    <strong className="text-gray-300">글로벌 확장</strong>
                    <p className="text-sm">스테이블코인 기반 국경 없는 정산</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-End 온체인 금융 인프라
          </h2>
          <p className="text-gray-400 mb-16">
            토큰 발행부터 결제, 정산, 컴플라이언스까지 하나의 플랫폼에서
          </p>

          {/* Architecture Diagram */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#262626] overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Orchestration Layer */}
              <div className="mb-4">
                <div className="text-left text-sm text-gray-500 mb-2">Orchestration Service</div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: 'PAYMENT', items: ['Tx Monitoring', 'Checkout / Refund'] },
                    { name: 'SETTLEMENT', items: ['Reconciliation', 'Escrow / On-Off Ramp'] },
                    { name: 'CONNECT', items: ['Wallet Aggregator', 'Paymaster'] },
                    { name: 'TOKENIZATION', items: ['Mint / Burn', 'Policy / PoR'] },
                  ].map((module) => (
                    <div key={module.name} className="bg-emerald-600 rounded-lg p-3">
                      <div className="font-semibold text-white text-sm mb-2">{module.name}</div>
                      {module.items.map((item) => (
                        <div key={item} className="text-xs text-emerald-100 bg-emerald-700/50 rounded px-2 py-1 mb-1">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle Layer */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-emerald-800 rounded-lg p-3 text-center">
                  <span className="text-white font-semibold text-sm">CRYPTO FRAML</span>
                </div>
                <div className="bg-emerald-800 rounded-lg p-3 text-center">
                  <span className="text-white font-semibold text-sm">INTELLIGENCE</span>
                </div>
              </div>

              {/* Compliance Layer */}
              <div className="mb-4">
                <div className="text-left text-sm text-gray-500 mb-2">Compliance Service</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#262626] rounded-lg p-3 text-center border border-[#333]">
                    <span className="text-gray-300 text-sm">Unified Data Platform</span>
                  </div>
                  <div className="bg-[#262626] rounded-lg p-3 text-center border border-[#333]">
                    <span className="text-gray-300 text-sm">FRAML Domain Engine</span>
                  </div>
                  <div className="bg-[#262626] rounded-lg p-3 text-center border border-[#333]">
                    <span className="text-gray-300 text-sm">AI-driven Decision Intelligence</span>
                  </div>
                </div>
              </div>

              {/* Data Layer */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                  <span className="text-gray-400 text-xs">Onchain Data API</span>
                </div>
                <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                  <span className="text-gray-400 text-xs">Onchain Data Lakehouse</span>
                </div>
                <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                  <span className="text-gray-400 text-xs">Clair Core - Data Platform</span>
                </div>
              </div>

              {/* Infra Layer */}
              <div>
                <div className="text-left text-sm text-gray-500 mb-2">Institutional Wallet Infra & Data Service</div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                    <span className="text-gray-400 text-xs">Onchain Indexing Data</span>
                  </div>
                  <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                    <span className="text-gray-400 text-xs">AA - Bundler</span>
                  </div>
                  <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                    <span className="text-gray-400 text-xs">Domain Ontology Modeling</span>
                  </div>
                  <div className="bg-[#1f1f1f] rounded-lg p-2 text-center border border-[#333]">
                    <span className="text-gray-400 text-xs">Customer Data Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Core Modules
          </h2>
          <p className="text-gray-400 text-center mb-16">
            4개의 핵심 모듈로 구성된 완전한 온체인 금융 인프라
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tokenization */}
            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] card-hover">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🪙</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tokenization</h3>
              <p className="text-gray-400 mb-6">
                디지털 자산 발행의 모든 것. 스테이블코인, RWA, STO까지 다양한 토큰을 발행하고 관리합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Mint & Burn</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Policy</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Proof of Reserve</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Cross-chain</span>
              </div>
              <div className="mt-4 text-sm text-emerald-500">✓ PoC & 파일럿 완료</div>
            </div>

            {/* Connect */}
            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] card-hover">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-gray-400 mb-6">
                모든 지갑을 하나로 연결. 자체 개발한 MPC Non-custodial Wallet과 유연한 Paymaster 정책을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">MPC Wallet</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Wallet Aggregator</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Paymaster</span>
              </div>
              <div className="mt-4 text-sm text-emerald-500">✓ 자체 개발 MPC</div>
            </div>

            {/* Payments */}
            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] card-hover">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Payments</h3>
              <p className="text-gray-400 mb-6">
                온체인 결제, 오프체인 경험. 소비자는 익숙한 결제 경험을, 가맹점은 온체인의 이점을 누립니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Checkout Widget</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">QR 결제</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Tx Monitoring</span>
              </div>
              <div className="mt-4 text-sm text-emerald-500">✓ 온체인 Escrow 구현</div>
            </div>

            {/* Settlement */}
            <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] card-hover">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Settlement</h3>
              <p className="text-gray-400 mb-6">
                실시간 정산, 완전한 투명성. 온체인 실행 레일은 SCOPE가, 최종 원화 정산은 기존 PG/VAN이 담당합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Reconciliation</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">Escrow</span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">On-Off Ramp</span>
              </div>
              <div className="mt-4 text-sm text-emerald-500">✓ D+0 실시간 정산 지원</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SCOPE */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why SCOPE?
          </h2>
          <p className="text-gray-400 text-center mb-16">
            왜 SCOPE를 선택해야 하는가
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SOC2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">SOC2 인증 완료</h3>
              <p className="text-gray-400">
                글로벌 보안 표준 SOC2 인증을 획득했습니다. 엔터프라이즈 수준의 데이터 보호와 보안 체계를 보장합니다.
              </p>
            </div>

            {/* Compliance */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance - Clair</h3>
              <p className="text-gray-400 mb-4">
                Travel Rule 솔루션 VV의 개발사이자 운용사. AI 기반 의심거래 탐지, 자동 추적 및 리포트 생성.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-[#262626] text-gray-300 rounded text-xs">FRAML</span>
                <span className="px-2 py-1 bg-[#262626] text-gray-300 rounded text-xs">Travel Rule</span>
                <span className="px-2 py-1 bg-[#262626] text-gray-300 rounded text-xs">AI Report</span>
              </div>
            </div>

            {/* Infra */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-600/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Institutional Infra</h3>
              <p className="text-gray-400 mb-4">
                Enterprise Wallet Node, Onchain Indexing, Ontology Modeling. 높은 데이터 품질과 정합성을 보장합니다.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-2 py-1 bg-[#262626] text-gray-300 rounded text-xs">Dedicated Node</span>
                <span className="px-2 py-1 bg-[#262626] text-gray-300 rounded text-xs">Data API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Supported Chains</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Ethereum', 'Arbitrum', 'Optimism', 'Solana', 'Avalanche', 'Tron', 'Aptos'].map((chain) => (
              <div
                key={chain}
                className="px-6 py-3 bg-[#141414] border border-[#262626] rounded-full text-gray-300"
              >
                {chain}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">추가 체인은 고객사 요청에 따라 확장 가능</p>
        </div>
      </section>

      {/* References */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            References
          </h2>
          <p className="text-gray-400 text-center mb-16">
            국내 주요 금융기관 및 엔터프라이즈와 함께합니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 금융권 */}
            <div>
              <h3 className="text-emerald-400 font-semibold mb-4">금융권</h3>
              <ul className="space-y-3 text-gray-400">
                <li>KB국민은행</li>
                <li>신한투자증권</li>
                <li>우리은행</li>
                <li>한화시스템</li>
                <li>유안타증권</li>
                <li>한국예탁결제원</li>
              </ul>
            </div>

            {/* 결제/핀테크 */}
            <div>
              <h3 className="text-emerald-400 font-semibold mb-4">결제 / 핀테크</h3>
              <ul className="space-y-3 text-gray-400">
                <li>KSNET</li>
                <li>IM Bank</li>
              </ul>
            </div>

            {/* 엔터프라이즈 */}
            <div>
              <h3 className="text-emerald-400 font-semibold mb-4">엔터프라이즈 / 크립토</h3>
              <ul className="space-y-3 text-gray-400">
                <li>현대백화점</li>
                <li>롯데홈쇼핑</li>
                <li>야놀자</li>
                <li>두나무 (업비트)</li>
                <li>MiL.K</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            온체인 금융의 새로운 기준
          </h2>
          <p className="text-gray-400 mb-8">
            SCOPE와 함께 엔터프라이즈급 스테이블코인 인프라를 경험하세요.
          </p>
          <a
            href="mailto:contact@lambda256.io"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all glow"
          >
            데모 요청하기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-bold gradient-text">SCOPE</span>
            <span className="text-gray-500">by Lambda256</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>SOC2 Certified</span>
            <span>•</span>
            <span>VV (Travel Rule) 개발사</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
