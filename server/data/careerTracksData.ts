import type { CareerTrack } from '../../shared/types.js';
import { frontendFullstackWebTrack } from './tracks/frontendFullstackWeb.js';
import { backendSystemsEngineeringTrack } from './tracks/backendSystemsEngineering.js';
import { mobileAppDevelopmentTrack } from './tracks/mobileAppDevelopment.js';
import { linuxDevopsAdminTrack } from './tracks/linuxDevopsAdmin.js';
import { cloudSolutionsArchitectureTrack } from './tracks/cloudSolutionsArchitecture.js';
import { cybersecuritySocAnalystTrack } from './tracks/cybersecuritySocAnalyst.js';
import { pythonDataAiTrack } from './tracks/pythonDataAi.js';
import { ispMikrotikNetworkingTrack } from './tracks/ispMikrotikNetworking.js';
import { embeddedIotRoboticsTrack } from './tracks/embeddedIotRobotics.js';
import { uiUxDesignTrack } from './tracks/uiUxDesign.js';
import { qaSoftwareTestingTrack } from './tracks/qaSoftwareTesting.js';
import { itHardwareSupportTrack } from './tracks/itHardwareSupport.js';
import { graphicDesignMotionTrack } from './tracks/graphicDesignMotion.js';
import { digitalMarketingEcommerceTrack } from './tracks/digitalMarketingEcommerce.js';
import { bpoTechSupportDataTrack } from './tracks/bpoTechSupportData.js';
import { digitalLiteracyFoundationTrack } from './tracks/digitalLiteracyFoundation.js';
import { gameDevelopmentUnityTrack } from './tracks/gameDevelopmentUnity.js';
import { aiMlEngineerTrack } from './tracks/aiMlEngineer.js';
import { ethicalHackingBugBountyTrack } from './tracks/ethicalHackingBugBounty.js';
import { enterpriseJavaFintechTrack } from './tracks/enterpriseJavaFintech.js';
import { laravelPhpAgencyDevTrack } from './tracks/laravelPhpAgencyDev.js';
import { desktopAppDevelopmentTrack } from './tracks/desktopAppDevelopment.js';
import { dataEngineeringBigDataTrack } from './tracks/dataEngineeringBigData.js';
import { blockchainWeb3DeveloperTrack } from './tracks/blockchainWeb3Developer.js';

export const careerTracksData: Omit<CareerTrack, 'id'>[] = [
  frontendFullstackWebTrack,
  backendSystemsEngineeringTrack,
  mobileAppDevelopmentTrack,
  linuxDevopsAdminTrack,
  cloudSolutionsArchitectureTrack,
  cybersecuritySocAnalystTrack,
  pythonDataAiTrack,
  ispMikrotikNetworkingTrack,
  embeddedIotRoboticsTrack,
  uiUxDesignTrack,
  qaSoftwareTestingTrack,
  itHardwareSupportTrack,
  graphicDesignMotionTrack,
  digitalMarketingEcommerceTrack,
  bpoTechSupportDataTrack,
  digitalLiteracyFoundationTrack,
  gameDevelopmentUnityTrack,
  aiMlEngineerTrack,
  ethicalHackingBugBountyTrack,
  enterpriseJavaFintechTrack,
  laravelPhpAgencyDevTrack,
  desktopAppDevelopmentTrack,
  dataEngineeringBigDataTrack,
  blockchainWeb3DeveloperTrack,
];
