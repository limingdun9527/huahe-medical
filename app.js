const departments = [
  {
    name: { zh: "肿瘤中心", en: "Oncology Center" },
    enName: "Department of Oncology",
    image: "oncology.webp",
    caption: { zh: "病理与临床共同评估", en: "Pathology and clinical review, together" },
    alt: { zh: "实验室人员使用显微镜进行病理检查", en: "Laboratory professional examining samples under a microscope" },
    desc: {
      zh: "从诊断分型到治疗与康复，相关专科围绕同一份病历讨论。需要第二诊疗意见时，也可以先进行资料评估。",
      en: "From diagnosis and staging to treatment and recovery, specialists review the same records together. A second opinion can begin with a record review."
    },
    tags: {
      zh: ["肺癌", "乳腺癌", "消化道肿瘤", "肝胆胰肿瘤", "妇科肿瘤", "第二诊疗意见"],
      en: ["Lung cancer", "Breast cancer", "GI oncology", "HPB oncology", "Gynecologic oncology", "Second opinion"]
    },
    team: {
      zh: "肿瘤内科 · 外科 · 放射治疗 · 影像医学 · 病理 · 营养与康复",
      en: "Medical oncology · Surgery · Radiation oncology · Imaging · Pathology · Nutrition & rehabilitation"
    }
  },
  {
    name: { zh: "心血管中心", en: "Cardiovascular Center" },
    enName: "Heart & Vascular Institute",
    image: "cardiovascular.webp",
    caption: { zh: "影像与临床共同判断", en: "Imaging and clinical judgment, together" },
    alt: { zh: "医生查看胸部影像并讨论诊断", en: "Clinician reviewing a chest X-ray for diagnosis" },
    desc: {
      zh: "从风险评估、无创检查到介入与外科治疗，按病情轻重制定方案。既往影像、动态心电图和用药资料可在出发前评估。",
      en: "Risk assessment, non-invasive testing, interventional and surgical care are planned by severity. Imaging, ECG and medication records can be reviewed before travel."
    },
    tags: {
      zh: ["冠心病", "心律失常", "心脏瓣膜病", "心力衰竭", "结构性心脏病", "心血管风险评估"],
      en: ["Coronary disease", "Arrhythmia", "Valve disease", "Heart failure", "Structural heart disease", "Risk assessment"]
    },
    team: {
      zh: "心血管内科 · 心脏外科 · 影像医学 · 麻醉 · 重症医学 · 心脏康复",
      en: "Cardiology · Cardiac surgery · Imaging · Anesthesia · Critical care · Cardiac rehabilitation"
    }
  },
  {
    name: { zh: "神经科学中心", en: "Neuroscience Center" },
    enName: "Neuroscience Institute",
    image: "neuroscience.webp",
    caption: { zh: "影像与功能共同评估", en: "Imaging and function, reviewed together" },
    alt: { zh: "医生查看脑部磁共振影像", en: "Clinician reviewing brain MRI scans" },
    desc: {
      zh: "神经内科、神经外科、影像与康复共同评估，既关注诊断依据，也关注术后功能和长期管理。",
      en: "Neurology, neurosurgery, imaging and rehabilitation review each case together, with attention to diagnosis, function and long-term management."
    },
    tags: {
      zh: ["脑肿瘤", "脑血管病", "癫痫", "运动障碍", "神经免疫疾病", "神经康复"],
      en: ["Brain tumors", "Cerebrovascular disease", "Epilepsy", "Movement disorders", "Neuroimmunology", "Neurorehabilitation"]
    },
    team: {
      zh: "神经内科 · 神经外科 · 神经影像 · 病理 · 重症医学 · 康复医学",
      en: "Neurology · Neurosurgery · Neuroradiology · Pathology · Critical care · Rehabilitation"
    }
  },
  {
    name: { zh: "骨科与运动医学", en: "Orthopedics & Sports Medicine" },
    enName: "Orthopedics & Sports Medicine",
    image: "orthopedics.webp",
    caption: { zh: "从疼痛评估到功能恢复", en: "From pain assessment to functional recovery" },
    alt: { zh: "治疗师为患者评估颈肩功能", en: "Therapist assessing a patient’s neck and shoulder function" },
    desc: {
      zh: "围绕疼痛、活动能力与生活目标制定方案，将保守治疗、手术评估和术后康复放在同一条路径中。",
      en: "Conservative care, surgical assessment and rehabilitation are planned together around pain, mobility and personal goals."
    },
    tags: {
      zh: ["关节疾病", "脊柱疾病", "运动损伤", "创伤修复", "关节置换评估", "术后康复"],
      en: ["Joint conditions", "Spine conditions", "Sports injuries", "Trauma reconstruction", "Joint replacement review", "Rehabilitation"]
    },
    team: {
      zh: "骨科 · 运动医学 · 影像医学 · 麻醉与疼痛 · 康复医学",
      en: "Orthopedics · Sports medicine · Imaging · Anesthesia & pain · Rehabilitation"
    }
  },
  {
    name: { zh: "消化病中心", en: "Digestive Health Center" },
    enName: "Digestive Disease Center",
    image: "digestive.webp",
    caption: { zh: "先梳理症状与检查资料", en: "Reviewing symptoms and clinical records" },
    alt: { zh: "医生查看病历与检查资料", en: "Physician reviewing clinical records" },
    desc: {
      zh: "消化内科、外科、内镜、影像与营养团队协作。需要内镜检查时，可提前说明准备要求和大致行程安排。",
      en: "Gastroenterology, surgery, endoscopy, imaging and nutrition work together. Endoscopy preparation and travel timing can be discussed in advance."
    },
    tags: {
      zh: ["消化内镜", "胃肠肿瘤", "肝胆胰疾病", "炎症性肠病", "功能性胃肠病", "营养支持"],
      en: ["Endoscopy", "GI tumors", "HPB conditions", "Inflammatory bowel disease", "Functional GI disorders", "Nutrition support"]
    },
    team: {
      zh: "消化内科 · 普通外科 · 消化内镜 · 影像与病理 · 肿瘤团队 · 营养",
      en: "Gastroenterology · General surgery · Endoscopy · Imaging & pathology · Oncology · Nutrition"
    }
  },
  {
    name: { zh: "国际健康管理", en: "International Executive Health" },
    enName: "Executive Health & Preventive Medicine",
    image: "health.webp",
    caption: { zh: "把风险因素讲清楚", en: "Making risk factors clear" },
    alt: { zh: "医护人员为患者测量血压", en: "Clinician measuring a patient’s blood pressure" },
    desc: {
      zh: "根据年龄、家族史和既往疾病安排健康评估，不用项目堆砌代替判断。检查后提供报告解读与复查建议。",
      en: "Assessments are tailored to age, family history and existing conditions. Clear result explanations and follow-up recommendations are provided."
    },
    tags: {
      zh: ["深度健康评估", "肿瘤筛查", "心血管风险", "慢病管理", "旅行医学", "报告解读"],
      en: ["Executive assessment", "Cancer screening", "Cardiovascular risk", "Chronic disease management", "Travel medicine", "Report review"]
    },
    team: {
      zh: "全科医学 · 相关专科 · 检验与影像 · 营养 · 健康管理",
      en: "Family medicine · Relevant specialties · Laboratory & imaging · Nutrition · Health management"
    }
  }
];

const journeySteps = [
  {
    kicker: "CONSULT",
    title: { zh: "先选择方便的沟通方式", en: "Choose how to reach us" },
    desc: {
      zh: "可以通过 WhatsApp、微信、电话或邮箱说明需求。只需基本信息和想咨询的问题，病历暂时不齐也可以先开始。",
      en: "Contact us through WhatsApp, WeChat, phone or email. Basic details and your question are enough to start; complete records are not required."
    },
    list: {
      zh: ["姓名与所在国家或地区", "常用的 WhatsApp、微信、电话或邮箱", "意向科室与想咨询的问题"],
      en: ["Name and country or region", "Your WhatsApp, WeChat, phone or email", "Preferred specialty and your question"]
    },
    note: {
      zh: "点击联系入口后，会为您自动预选对应的沟通方式。",
      en: "Selecting a contact option preselects that channel in the form."
    }
  },
  {
    kicker: "REVIEW",
    title: { zh: "评估病历，明确就诊方向", en: "Review records and clarify the next step" },
    desc: {
      zh: "协调员整理已有资料，并根据病情对接相关专科评估。缺少的检查或文件会在沟通中说明，不需要反复提交。",
      en: "Your coordinator organizes available records and connects them with the appropriate specialty for review. Any missing tests or documents will be explained without repeated submissions."
    },
    list: {
      zh: ["近期诊断、检查和用药记录", "影像原始文件，如有可优先提供 DICOM", "病理报告或其他已有专科意见"],
      en: ["Recent diagnoses, tests and medication records", "Original imaging, preferably DICOM when available", "Pathology reports or previous specialist opinions"]
    },
    note: {
      zh: "无需重复填写已提供的信息，资料可通过后续沟通补充。",
      en: "You will not need to re-enter information already provided; records can follow later."
    }
  },
  {
    kicker: "BOOK",
    title: { zh: "对接机构并确认预约", en: "Coordinate the provider and appointment" },
    desc: {
      zh: "根据病情与合作资源，协助确认接诊机构、专科、就诊时间、费用构成和行程。广州现代医院为首要合作机构，也可按需求对接其他重点医疗机构。",
      en: "We coordinate the appropriate provider, specialty, timing, cost components and travel. Guangzhou Modern Hospital is our primary partner, with access to other leading institutions when needed."
    },
    list: {
      zh: ["大致出行时间与陪同人员安排", "保险卡、保单号和预授权信息", "住宿、接送机和医学口译需求"],
      en: ["Approximate travel dates and companion arrangements", "Insurance card, policy number and pre-authorization details", "Accommodation, transfer and interpretation needs"]
    },
    note: {
      zh: "建议先确认就诊计划，再购买机票和预订住宿。",
      en: "Confirm your care plan before booking flights and accommodation."
    }
  },
  {
    kicker: "VISIT",
    title: { zh: "就诊有人协助，离院资料清楚", en: "Supported visits and clear records at departure" },
    desc: {
      zh: "到院后由协调员协助登记、检查和会诊动线，按安排提供医学口译。离院前整理就诊摘要、用药与复诊建议。",
      en: "Your coordinator supports registration, tests and consultations, with interpretation as arranged. Before departure, your summary, medication and follow-up plan are organized."
    },
    list: {
      zh: ["护照、保险卡与原始病历资料", "当前用药和过敏清单", "复诊时间与后续联系方式"],
      en: ["Passport, insurance card and original records", "Current medication and allergy list", "Follow-up timing and ongoing contact details"]
    },
    note: {
      zh: "适合远程随访的情况，可与居住地医生衔接后续照护。",
      en: "When appropriate, follow-up can be coordinated remotely or with your physician at home."
    }
  }
];

const INQUIRY_ENDPOINT = "https://api.22221111.cn/api/inquiries";
const CONSENT_VERSION = "2026-11-12";
const DIRECT_CONTACT = {
  whatsapp: "",
  phone: "",
  wechat: ""
};
const channelContent = {
  whatsapp: {
    label: { zh: "WhatsApp 号码", en: "WhatsApp number" },
    hint: { zh: "请包含国家或地区代码，例如 +65、+86", en: "Include the country code, e.g. +65 or +86" },
    placeholder: { zh: "+国家代码 电话号码", en: "+country code number" },
    error: { zh: "请输入以 + 开头、包含国家或地区代码的 WhatsApp 号码。", en: "Enter a WhatsApp number starting with + and the country code." }
  },
  wechat: {
    label: { zh: "微信 ID 或手机号", en: "WeChat ID or phone number" },
    hint: { zh: "可填写微信 ID，或含国家或地区代码的手机号", en: "Enter your WeChat ID, or a phone number with country code" },
    placeholder: { zh: "微信 ID 或 +国家代码 手机号", en: "WeChat ID or +country code number" },
    error: { zh: "请输入有效的微信 ID，或含国家或地区代码的手机号码。", en: "Enter a valid WeChat ID, or a phone number with country code." }
  },
  phone: {
    label: { zh: "电话号码", en: "Phone number" },
    hint: { zh: "请包含国家或地区代码，方便国际回拨", en: "Include your country code so we can call you internationally" },
    placeholder: { zh: "+国家代码 电话号码", en: "+country code number" },
    error: { zh: "请输入以 + 开头、包含国家或地区代码的电话号码。", en: "Enter a phone number starting with + and the country code." }
  },
  email: {
    label: { zh: "电子邮箱", en: "Email address" },
    hint: { zh: "例如 name@example.com", en: "For example, name@example.com" },
    placeholder: { zh: "name@example.com", en: "name@example.com" },
    error: { zh: "请输入有效的电子邮箱地址。", en: "Enter a valid email address." }
  }
};
const channelNames = {
  whatsapp: { zh: "WhatsApp", en: "WhatsApp" },
  wechat: { zh: "微信", en: "WeChat" },
  phone: { zh: "电话", en: "Phone" },
  email: { zh: "邮箱", en: "Email" }
};
let preferredChannel = "whatsapp";

let currentLang = "zh";
try {
  currentLang = localStorage.getItem("huahe-language") || "zh";
} catch (error) {
  currentLang = "zh";
}
let currentDepartment = 0;
let currentStep = 0;
let lastRequest = null;
const langSwitch = document.getElementById("langSwitch");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const siteHeader = document.getElementById("siteHeader");

function text(value) {
  return value[currentLang] || value.zh;
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = currentLang === "zh" ? "华和国际医疗｜肿瘤专科国际就医协调" : "Huahe International Medical | Oncology-Led Care in China";
  const description = document.querySelector('meta[name="description"]');
  description.content = currentLang === "zh"
    ? "华和国际医疗以肿瘤专科为特色，为海外患者提供中国就医协调。广州现代医院为首要合作机构，可对接中国多家重点医疗机构。"
    : "Oncology-led medical coordination for international patients in China, with Guangzhou Modern Hospital as our primary partner.";
  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    element.textContent = element.dataset[currentLang];
  });
  document.querySelectorAll("[data-placeholder-zh][data-placeholder-en]").forEach((element) => {
    element.placeholder = currentLang === "zh" ? element.dataset.placeholderZh : element.dataset.placeholderEn;
  });
  document.querySelectorAll("[data-alt-zh][data-alt-en]").forEach((element) => {
    element.alt = currentLang === "zh" ? element.dataset.altZh : element.dataset.altEn;
  });
  langSwitch.querySelector("span").textContent = currentLang === "zh" ? "EN" : "中文";
  langSwitch.setAttribute("aria-label", currentLang === "zh" ? "Switch to English" : "切换至中文");
  try {
    localStorage.setItem("huahe-language", currentLang);
  } catch (error) {
    // Language selection still works without storage.
  }
  const menuIsOpen = mobileNav.classList.contains("open");
  menuToggle.setAttribute("aria-label", menuIsOpen
    ? (currentLang === "zh" ? "关闭菜单" : "Close menu")
    : (currentLang === "zh" ? "打开菜单" : "Open menu"));
  document.getElementById("backTop").setAttribute("aria-label", currentLang === "zh" ? "返回顶部" : "Back to top");
  renderDepartment(currentDepartment);
  renderJourney(currentStep);
  clearAllErrors();
  updateChannel(preferredChannel);
  if (lastRequest) renderRequestSummary();
}

function renderDepartment(index) {
  currentDepartment = index;
  const department = departments[index];
  const image = document.getElementById("deptImage");
  document.getElementById("deptIndex").textContent = `CENTER ${String(index + 1).padStart(2, "0")}`;
  document.getElementById("deptName").textContent = text(department.name);
  document.getElementById("deptEn").textContent = department.enName;
  document.getElementById("deptDesc").textContent = text(department.desc);
  document.getElementById("deptTags").innerHTML = department.tags[currentLang].map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("deptTeam").textContent = text(department.team);
  document.getElementById("deptCaption").textContent = text(department.caption);
  image.src = department.image;
  image.alt = text(department.alt);
  document.querySelectorAll("[data-dept]").forEach((button) => {
    const active = Number(button.dataset.dept) === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderJourney(index) {
  currentStep = index;
  const step = journeySteps[index];
  document.getElementById("journeyNumber").textContent = String(index + 1).padStart(2, "0");
  document.getElementById("journeyKicker").textContent = step.kicker;
  document.getElementById("journeyTitle").textContent = text(step.title);
  document.getElementById("journeyDesc").textContent = text(step.desc);
  document.getElementById("journeyChecklist").innerHTML = step.list[currentLang].map((item) => `<li>${item}</li>`).join("");
  document.getElementById("journeyNote").textContent = text(step.note);
  document.querySelectorAll("[data-step]").forEach((button) => {
    const active = Number(button.dataset.step) === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLanguage();
});

document.querySelectorAll("[data-dept]").forEach((button) => {
  button.addEventListener("click", () => renderDepartment(Number(button.dataset.dept)));
});
document.querySelectorAll("[data-step]").forEach((button) => {
  button.addEventListener("click", () => renderJourney(Number(button.dataset.step)));
});
document.querySelectorAll("[data-open-step]").forEach((link) => {
  link.addEventListener("click", () => renderJourney(Number(link.dataset.openStep)));
});

document.querySelectorAll("[data-condition-zh]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const department = document.getElementById("apptDepartment");
    const message = document.getElementById("apptMessage");
    department.value = "oncology";
    clearFieldError(department);
    const condition = currentLang === "zh" ? trigger.dataset.conditionZh : trigger.dataset.conditionEn;
    const nextMessage = currentLang === "zh"
      ? `希望咨询${condition}的评估与治疗方向。`
      : `I would like to ask about ${condition} and the available assessment and treatment directions.`;
    if (!message.value.trim() || message.dataset.autofilled === "true") {
      message.value = nextMessage;
      message.dataset.autofilled = "true";
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("appointmentForm").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  });
});
document.querySelector(".department-copy .text-link").addEventListener("click", () => {
  const values = ["oncology", "cardiovascular", "neuroscience", "orthopedics", "digestive", "health"];
  document.getElementById("apptDepartment").value = values[currentDepartment];
  clearFieldError(document.getElementById("apptDepartment"));
});

function enableTabKeyboard(selector) {
  const tabs = Array.from(document.querySelectorAll(selector));
  tabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    });
  });
}
enableTabKeyboard("[data-dept]");
enableTabKeyboard("[data-step]");

function closeMenu() {
  mobileNav.classList.remove("open");
  document.body.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", currentLang === "zh" ? "打开菜单" : "Open menu");
  menuToggle.querySelector("use").setAttribute("href", "#i-menu");
}

menuToggle.addEventListener("click", () => {
  const open = !mobileNav.classList.contains("open");
  mobileNav.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open
    ? (currentLang === "zh" ? "关闭菜单" : "Close menu")
    : (currentLang === "zh" ? "打开菜单" : "Open menu"));
  menuToggle.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
});
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 900 && mobileNav.classList.contains("open")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.getElementById("backTop").addEventListener("click", () => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
});
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

const desktopNavLinks = Array.from(document.querySelectorAll(".desktop-nav a"));
if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      desktopNavLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-22% 0px -66% 0px", threshold: 0 });
  desktopNavLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean).forEach((section) => navigationObserver.observe(section));
}

const form = document.getElementById("appointmentForm");
const formFields = document.getElementById("formFields");
const formSuccess = document.getElementById("formSuccess");
const formErrorSummary = document.getElementById("formErrorSummary");
const fieldMap = {
  name: { input: document.getElementById("apptName"), error: document.getElementById("nameError") },
  country: { input: document.getElementById("apptCountry"), error: document.getElementById("countryError") },
  contact: { input: document.getElementById("apptContact"), error: document.getElementById("contactError") },
  department: { input: document.getElementById("apptDepartment"), error: document.getElementById("departmentError") },
  consent: { input: document.getElementById("apptConsent"), error: document.getElementById("consentError") }
};

function updateChannel(channel, shouldScroll = false) {
  preferredChannel = channel;
  const content = channelContent[channel];
  document.getElementById("contactLabel").textContent = text(content.label);
  document.getElementById("contactHint").textContent = text(content.hint);
  const contactInput = document.getElementById("apptContact");
  contactInput.placeholder = text(content.placeholder);
  contactInput.inputMode = channel === "email" ? "email" : (channel === "wechat" ? "text" : "tel");
  document.querySelectorAll("[data-form-channel]").forEach((button) => {
    const active = button.dataset.formChannel === channel;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  clearFieldError(contactInput);
  if (shouldScroll) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("appointmentForm").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  }
}

document.querySelectorAll("[data-form-channel]").forEach((button) => {
  button.addEventListener("click", () => updateChannel(button.dataset.formChannel));
});

document.querySelectorAll("[data-channel]").forEach((button) => {
  button.addEventListener("click", async () => {
    const channel = button.dataset.channel;
    const directValue = DIRECT_CONTACT[channel];
    if (channel === "whatsapp" && directValue) {
      const number = directValue.replace(/\D/g, "");
      const message = currentLang === "zh" ? "您好，我想咨询来中国就医。" : "Hello, I would like to ask about medical care in China.";
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
      return;
    }
    if (channel === "phone" && directValue) {
      window.location.href = `tel:${directValue}`;
      return;
    }
    if (channel === "wechat" && directValue) {
      try {
        await navigator.clipboard.writeText(directValue);
      } catch (error) {
        // The contact form remains available when clipboard access is unavailable.
      }
      const toast = document.getElementById("toast");
      toast.textContent = currentLang === "zh" ? `微信号 ${directValue} 已复制` : `WeChat ID ${directValue} copied`;
      toast.classList.add("visible");
      setTimeout(() => toast.classList.remove("visible"), 3500);
      return;
    }
    updateChannel(channel, true);
  });
});

function errorMessage(key, type) {
  const messages = {
    name: {
      required: { zh: "请填写姓名。", en: "Please enter your name." },
      short: { zh: "姓名至少需要 2 个字符。", en: "Please enter at least 2 characters." }
    },
    country: {
      required: { zh: "请填写国家或地区。", en: "Please enter your country or region." }
    },
    contact: {
      required: { zh: "请填写邮箱或电话号码。", en: "Please enter an email address or phone number." },
      invalid: { zh: "请检查邮箱格式；如填写电话，请以 + 开头并包含国家或地区代码。", en: "Check the email format, or enter a phone number starting with + and the country code." }
    },
    department: {
      required: { zh: "请选择意向科室。", en: "Please select a specialty." }
    },
    consent: {
      required: { zh: "请确认信息使用范围。", en: "Please confirm how your information may be used." }
    }
  };
  return text(messages[key][type]);
}

function clearFieldError(input) {
  const entry = Object.values(fieldMap).find((item) => item.input === input);
  if (!entry) return;
  entry.input.removeAttribute("aria-invalid");
  entry.error.textContent = "";
  entry.error.classList.remove("visible");
  entry.input.closest(".form-field, .consent-field")?.classList.remove("invalid");
}

function clearAllErrors() {
  Object.values(fieldMap).forEach((entry) => clearFieldError(entry.input));
  formErrorSummary.hidden = true;
}

function validateField(key) {
  const entry = fieldMap[key];
  const input = entry.input;
  const value = input.type === "checkbox" ? input.checked : input.value.trim();
  let type = "";
  if (key === "name") {
    if (!value) type = "required";
    else if (value.length < 2) type = "short";
  }
  if (key === "country" && !value) type = "required";
  if (key === "contact") {
    if (!value) type = "required";
    else {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      const digits = value.replace(/\D/g, "");
      const phoneValid = value.startsWith("+") && /^\+[0-9\s().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
      if (preferredChannel === "email" && !emailValid) type = "invalid";
      if ((preferredChannel === "whatsapp" || preferredChannel === "phone") && !phoneValid) type = "invalid";
      if (preferredChannel === "wechat") {
        const wechatIdValid = /^[a-zA-Z][a-zA-Z0-9_-]{5,31}$/.test(value);
        if (!phoneValid && !wechatIdValid) type = "invalid";
      }
    }
  }
  if (key === "department" && !value) type = "required";
  if (key === "consent" && !value) type = "required";
  if (!type) {
    clearFieldError(input);
    return true;
  }
  const message = key === "contact" ? text(channelContent[preferredChannel].error) : errorMessage(key, type);
  entry.error.textContent = message;
  entry.error.classList.add("visible");
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", key === "contact" ? `contactHint ${entry.error.id}` : entry.error.id);
  input.closest(".form-field, .consent-field")?.classList.add("invalid");
  return false;
}

Object.entries(fieldMap).forEach(([key, entry]) => {
  entry.input.addEventListener("blur", () => validateField(key));
  entry.input.addEventListener(entry.input.type === "checkbox" || entry.input.tagName === "SELECT" ? "change" : "input", () => {
    if (entry.input.getAttribute("aria-invalid") === "true") validateField(key);
    else clearFieldError(entry.input);
    formErrorSummary.hidden = true;
  });
});
document.getElementById("apptMessage").addEventListener("input", (event) => {
  delete event.currentTarget.dataset.autofilled;
});

function buildSummary() {
  if (!lastRequest) return "";
  const labels = currentLang === "zh"
    ? { title: "华和国际医疗｜咨询提交回执", reference: "咨询编号", name: "姓名", country: "国家/地区", channel: "沟通方式", contact: "联系方式", department: "意向科室", message: "咨询问题", none: "未填写" }
    : { title: "Huahe International Medical | Inquiry Receipt", reference: "Reference", name: "Name", country: "Country/region", channel: "Contact method", contact: "Contact details", department: "Specialty", message: "Question", none: "Not provided" };
  const departmentSelect = document.getElementById("apptDepartment");
  const selectedOption = Array.from(departmentSelect.options).find((option) => option.value === lastRequest.departmentValue);
  const departmentName = selectedOption ? selectedOption.textContent : lastRequest.department;
  return `${labels.title}\n${labels.reference}: ${lastRequest.reference}\n\n${labels.name}: ${lastRequest.name}\n${labels.country}: ${lastRequest.country}\n${labels.channel}: ${text(channelNames[lastRequest.channel])}\n${labels.contact}: ${lastRequest.contact}\n${labels.department}: ${departmentName}\n${labels.message}: ${lastRequest.message || labels.none}`;
}

function renderRequestSummary() {
  document.getElementById("requestReference").textContent = lastRequest.reference;
  document.getElementById("requestSummary").textContent = buildSummary();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (form.dataset.submitting === "true") return;

  const keys = Object.keys(fieldMap);
  const invalidKeys = keys.filter((key) => !validateField(key));
  if (invalidKeys.length) {
    formErrorSummary.textContent = currentLang === "zh"
      ? `请检查并修改标出的 ${invalidKeys.length} 项信息。`
      : `Please review the ${invalidKeys.length} highlighted ${invalidKeys.length === 1 ? "field" : "fields"}.`;
    formErrorSummary.hidden = false;
    fieldMap[invalidKeys[0]].input.focus({ preventScroll: false });
    return;
  }

  const departmentSelect = document.getElementById("apptDepartment");
  const pendingRequest = {
    name: document.getElementById("apptName").value.trim(),
    country: document.getElementById("apptCountry").value.trim(),
    contact: document.getElementById("apptContact").value.trim(),
    channel: preferredChannel,
    department: departmentSelect.options[departmentSelect.selectedIndex].textContent,
    departmentValue: departmentSelect.value,
    message: document.getElementById("apptMessage").value.trim()
  };
  const sourceParams = new URLSearchParams(window.location.search);
  const source = sourceParams.get("utm_source") || sourceParams.get("source") || document.referrer || "direct";
  const submitButton = form.querySelector(".form-submit");
  const submitLabel = submitButton.querySelector("span");
  const defaultLabel = submitLabel.textContent;

  form.dataset.submitting = "true";
  submitButton.disabled = true;
  submitLabel.textContent = currentLang === "zh" ? "正在提交…" : "Sending…";
  formErrorSummary.hidden = true;

  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        ...pendingRequest,
        language: currentLang,
        consent: true,
        consent_version: CONSENT_VERSION,
        page_url: window.location.href.split("#")[0],
        source,
        website: document.getElementById("apptWebsite").value
      })
    });
    let result = {};
    try {
      result = await response.json();
    } catch (error) {
      result = {};
    }
    if (!response.ok || !result.reference) throw new Error(`HTTP ${response.status}`);

    lastRequest = { reference: result.reference, ...pendingRequest };
    renderRequestSummary();
    formFields.hidden = true;
    formSuccess.hidden = false;
    document.getElementById("copyStatus").textContent = "";
    formSuccess.focus({ preventScroll: false });
  } catch (error) {
    formErrorSummary.textContent = currentLang === "zh"
      ? "暂时无法提交。您的信息尚未发送，请稍后重试。"
      : "We could not submit your inquiry. Your information has not been sent; please try again shortly.";
    formErrorSummary.hidden = false;
    formErrorSummary.scrollIntoView({ behavior: "smooth", block: "center" });
  } finally {
    submitButton.disabled = false;
    submitLabel.textContent = defaultLabel;
    delete form.dataset.submitting;
  }
});

document.getElementById("downloadRequest").addEventListener("click", () => {
  if (!lastRequest) return;
  const blob = new Blob([buildSummary()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Huahe-Appointment-${lastRequest.reference}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  document.getElementById("copyStatus").textContent = currentLang === "zh" ? "回执已下载。" : "Receipt downloaded.";
});

document.getElementById("copyRequest").addEventListener("click", async () => {
  if (!lastRequest) return;
  const summary = buildSummary();
  try {
    await navigator.clipboard.writeText(summary);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = summary;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  document.getElementById("copyStatus").textContent = currentLang === "zh" ? "回执已复制。" : "Receipt copied.";
});

document.getElementById("year").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px" });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

applyLanguage();
