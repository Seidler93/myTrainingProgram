import Camps from '../components/camps/Camps'
export default function CampsPage() {

  return (
    <div id='camps' className=' py-4 w-100 d-flex justify-content-center flex-column align-items-center'>
      <div className="w-100 d-flex justify-content-center mb-4"><h2 className="text-center bor-btm px-5 pb-2">PROGRAMS</h2></div>
      <Camps/>
    </div>
  )
}