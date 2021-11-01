import request from '@/utils/request'

export function init () {
  return request({
    url: '/candidate/resume/init',
    method: 'post'
  })
}

export function myResume () {
  return request({
    url: '/candidate/resume',
    method: 'get'
  })
}

export function resumeExtract (file) {
  // eslint-disable-next-line no-undef
  const form = new FormData()
  form.append('file', file)
  return request({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/candidate/resume/extract',
    method: 'post',
    data: form
  })
}

export function getBaseInfo () {
  return request({
    url: '/candidate/resume/baseinfo',
    method: 'get'
  })
}
export function saveBaseInfo (form) {
  return request({
    url: '/candidate/resume/baseinfo',
    method: 'post',
    data: form
  })
}

export function saveEdu (form) {
  return request({
    url: '/candidate/resume/education',
    method: 'post',
    data: form
  })
}
export function deleteEdu (id) {
  return request({
    url: '/candidate/resume/education/',
    method: 'delete',
    params: {
      id
    }
  })
}

export function saveWork (form) {
  return request({
    url: '/candidate/resume/work',
    method: 'post',
    data: form
  })
}
export function deleteWork (id) {
  return request({
    url: '/candidate/resume/work',
    method: 'delete',
    params: {
      id
    }
  })
}

export function saveTrain (form) {
  return request({
    url: '/candidate/resume/train',
    method: 'post',
    data: form
  })
}
export function deleteTrain (id) {
  return request({
    url: '/candidate/resume/train',
    method: 'delete',
    params: {
      id
    }
  })
}

export function saveLanguage (form) {
  return request({
    url: '/candidate/resume/lang',
    method: 'post',
    data: form
  })
}
export function deleteLanguage (id) {
  return request({
    url: '/candidate/resume/lang',
    method: 'delete',
    params: {
      id
    }
  })
}
