import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {FontAwesomeIcon} from "@fo"
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function MateriaCard({materia}) {
  return (
          <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
              <h1>{materia.titulo}</h1>
              <div className="space-between">
                <Link href={`/materia/${materia._id}/delete`}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </Link>
                <Link href={`/materia/${materia._id}/update`}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </div>
                            
          </div>

  )
}

export default MateriaCard