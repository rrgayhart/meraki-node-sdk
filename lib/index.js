/**
  * @module meraki
  *
  * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date:
  * 04 March, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https:
  * //meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https:
  * //www.meraki.com)
  */

'use strict';

const Configuration = require('./configuration');
const APIUsageController = require('./Controllers/APIUsageController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const AdminsController = require('./Controllers/AdminsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const BluetoothSettingsController = require('./Controllers/BluetoothSettingsController');
const CameraQualityRetentionProfilesController =
  require('./Controllers/CameraQualityRetentionProfilesController');
const CamerasController = require('./Controllers/CamerasController');
const ChangeLogController = require('./Controllers/ChangeLogController');
const ClientsController = require('./Controllers/ClientsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const ConnectivityMonitoringDestinationsController =
  require('./Controllers/ConnectivityMonitoringDestinationsController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const DashboardBrandingPoliciesController =
  require('./Controllers/DashboardBrandingPoliciesController');
const DevicesController = require('./Controllers/DevicesController');
const EventsController = require('./Controllers/EventsController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const FloorplansController = require('./Controllers/FloorplansController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const IntrusionSettingsController = require('./Controllers/IntrusionSettingsController');
const LicensesController = require('./Controllers/LicensesController');
const LinkAggregationsController = require('./Controllers/LinkAggregationsController');
const MGDHCPSettingsController = require('./Controllers/MGDHCPSettingsController');
const MGLANSettingsController = require('./Controllers/MGLANSettingsController');
const MGConnectivityMonitoringDestinationsController =
  require('./Controllers/MGConnectivityMonitoringDestinationsController');
const MGPortForwardingRulesController = require('./Controllers/MGPortForwardingRulesController');
const MGSubnetPoolSettingsController = require('./Controllers/MGSubnetPoolSettingsController');
const MGUplinkSettingsController = require('./Controllers/MGUplinkSettingsController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const MVSenseController = require('./Controllers/MVSenseController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const MXVLANPortsController = require('./Controllers/MXVLANPortsController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const MXInboundFirewallController = require('./Controllers/MXInboundFirewallController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const MXStaticRoutesController = require('./Controllers/MXStaticRoutesController');
const MXWarmSpareSettingsController = require('./Controllers/MXWarmSpareSettingsController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const ManagementInterfaceSettingsController =
  require('./Controllers/ManagementInterfaceSettingsController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const MonitoredMediaServersController = require('./Controllers/MonitoredMediaServersController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const NetflowSettingsController = require('./Controllers/NetflowSettingsController');
const NetworksController = require('./Controllers/NetworksController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PIIController = require('./Controllers/PIIController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const SMController = require('./Controllers/SMController');
const SNMPSettingsController = require('./Controllers/SNMPSettingsController');
const SsidsController = require('./Controllers/SsidsController');
const SecurityEventsController = require('./Controllers/SecurityEventsController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SwitchAclsController = require('./Controllers/SwitchAclsController');
const SwitchPortSchedulesController = require('./Controllers/SwitchPortSchedulesController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchProfilesController = require('./Controllers/SwitchProfilesController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const TrafficAnalysisSettingsController =
  require('./Controllers/TrafficAnalysisSettingsController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VlansController = require('./Controllers/VlansController');
const WebhookLogsController = require('./Controllers/WebhookLogsController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const WirelessSettingsController = require('./Controllers/WirelessSettingsController');
const ObjectTypeEnum = require('./Models/ObjectTypeEnum');
const UpdateDeviceCameraQualityAndRetentionSettingsModel =
  require('./Models/UpdateDeviceCameraQualityAndRetentionSettingsModel');
const QualityEnum = require('./Models/QualityEnum');
const ResolutionEnum = require('./Models/ResolutionEnum');
const UpdateDeviceCellularGatewaySettingsModel =
  require('./Models/UpdateDeviceCellularGatewaySettingsModel');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const FixedIpAssignmentModel = require('./Models/FixedIpAssignmentModel');
const UpdateDeviceCellularGatewaySettingsPortForwardingRulesModel =
  require('./Models/UpdateDeviceCellularGatewaySettingsPortForwardingRulesModel');
const RuleModel = require('./Models/RuleModel');
const CycleDeviceSwitchPortsModel = require('./Models/CycleDeviceSwitchPortsModel');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const TypeEnum = require('./Models/TypeEnum');
const StpGuardEnum = require('./Models/StpGuardEnum');
const UdldEnum = require('./Models/UdldEnum');
const UpdateDeviceWirelessBluetoothSettingsModel =
  require('./Models/UpdateDeviceWirelessBluetoothSettingsModel');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkApplianceFirewallInboundFirewallRulesModel =
  require('./Models/UpdateNetworkApplianceFirewallInboundFirewallRulesModel');
const Rule1Model = require('./Models/Rule1Model');
const PolicyEnum = require('./Models/PolicyEnum');
const ProtocolEnum = require('./Models/ProtocolEnum');
const UpdateNetworkAppliancePortModel = require('./Models/UpdateNetworkAppliancePortModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const MajorMinorAssignmentModeEnum = require('./Models/MajorMinorAssignmentModeEnum');
const CreateNetworkCameraQualityRetentionProfileModel =
  require('./Models/CreateNetworkCameraQualityRetentionProfileModel');
const VideoSettingsModel = require('./Models/VideoSettingsModel');
const MV21MV71Model = require('./Models/MV21MV71Model');
const Quality1Enum = require('./Models/Quality1Enum');
const MV12MV22MV72Model = require('./Models/MV12MV22MV72Model');
const Resolution1Enum = require('./Models/Resolution1Enum');
const MV32Model = require('./Models/MV32Model');
const Quality3Enum = require('./Models/Quality3Enum');
const Resolution2Enum = require('./Models/Resolution2Enum');
const MV12WEModel = require('./Models/MV12WEModel');
const MV22XMV72XModel = require('./Models/MV22XMV72XModel');
const Resolution4Enum = require('./Models/Resolution4Enum');
const UpdateNetworkCameraQualityRetentionProfileModel =
  require('./Models/UpdateNetworkCameraQualityRetentionProfileModel');
const GenerateNetworkCameraSnapshotModel = require('./Models/GenerateNetworkCameraSnapshotModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const UpdateNetworkCellularGatewaySettingsConnectivityMonitoringDestinationsModel =
  require('./Models/UpdateNetworkCellularGatewaySettingsConnectivityMonitoringDestinationsModel');
const DestinationModel = require('./Models/DestinationModel');
const UpdateNetworkCellularGatewaySettingsDhcpModel =
  require('./Models/UpdateNetworkCellularGatewaySettingsDhcpModel');
const UpdateNetworkCellularGatewaySettingsSubnetPoolModel =
  require('./Models/UpdateNetworkCellularGatewaySettingsSubnetPoolModel');
const UpdateNetworkCellularGatewaySettingsUplinkModel =
  require('./Models/UpdateNetworkCellularGatewaySettingsUplinkModel');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const DevicePolicyEnum = require('./Models/DevicePolicyEnum');
const PoliciesBySecurityApplianceModel = require('./Models/PoliciesBySecurityApplianceModel');
const DevicePolicy1Enum = require('./Models/DevicePolicy1Enum');
const GeneratedObjectModel = require('./Models/GeneratedObjectModel');
const DevicePolicy2Enum = require('./Models/DevicePolicy2Enum');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const GeneratedObject10Model = require('./Models/GeneratedObject10Model');
const UpdateNetworkConnectivityMonitoringDestinationsModel =
  require('./Models/UpdateNetworkConnectivityMonitoringDestinationsModel');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const UrlCategoryListSizeEnum = require('./Models/UrlCategoryListSizeEnum');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const BlinkNetworkDeviceLedsModel = require('./Models/BlinkNetworkDeviceLedsModel');
const UplinkEnum = require('./Models/UplinkEnum');
const UpdateNetworkDeviceManagementInterfaceSettingsModel =
  require('./Models/UpdateNetworkDeviceManagementInterfaceSettingsModel');
const Wan1Model = require('./Models/Wan1Model');
const WanEnabledEnum = require('./Models/WanEnabledEnum');
const Wan2Model = require('./Models/Wan2Model');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const AccessEnum = require('./Models/AccessEnum');
const CreateNetworkFloorPlanModel = require('./Models/CreateNetworkFloorPlanModel');
const CenterModel = require('./Models/CenterModel');
const BottomLeftCornerModel = require('./Models/BottomLeftCornerModel');
const BottomRightCornerModel = require('./Models/BottomRightCornerModel');
const TopLeftCornerModel = require('./Models/TopLeftCornerModel');
const TopRightCornerModel = require('./Models/TopRightCornerModel');
const UpdateNetworkFloorPlanModel = require('./Models/UpdateNetworkFloorPlanModel');
const Center1Model = require('./Models/Center1Model');
const CreateNetworkGroupPolicyModel = require('./Models/CreateNetworkGroupPolicyModel');
const SchedulingModel = require('./Models/SchedulingModel');
const MondayModel = require('./Models/MondayModel');
const TuesdayModel = require('./Models/TuesdayModel');
const WednesdayModel = require('./Models/WednesdayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const FridayModel = require('./Models/FridayModel');
const SaturdayModel = require('./Models/SaturdayModel');
const SundayModel = require('./Models/SundayModel');
const BandwidthModel = require('./Models/BandwidthModel');
const SettingsEnum = require('./Models/SettingsEnum');
const BandwidthLimits1Model = require('./Models/BandwidthLimits1Model');
const FirewallAndTrafficShapingModel = require('./Models/FirewallAndTrafficShapingModel');
const Settings1Enum = require('./Models/Settings1Enum');
const TrafficShapingRuleModel = require('./Models/TrafficShapingRuleModel');
const DefinitionModel = require('./Models/DefinitionModel');
const Type1Enum = require('./Models/Type1Enum');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const BandwidthLimits2Model = require('./Models/BandwidthLimits2Model');
const L3FirewallRuleModel = require('./Models/L3FirewallRuleModel');
const L7FirewallRuleModel = require('./Models/L7FirewallRuleModel');
const Policy2Enum = require('./Models/Policy2Enum');
const Type2Enum = require('./Models/Type2Enum');
const ContentFilteringModel = require('./Models/ContentFilteringModel');
const AllowedUrlPatternsModel = require('./Models/AllowedUrlPatternsModel');
const Settings2Enum = require('./Models/Settings2Enum');
const BlockedUrlPatternsModel = require('./Models/BlockedUrlPatternsModel');
const BlockedUrlCategoriesModel = require('./Models/BlockedUrlCategoriesModel');
const Settings4Enum = require('./Models/Settings4Enum');
const SplashAuthSettingsEnum = require('./Models/SplashAuthSettingsEnum');
const VlanTaggingModel = require('./Models/VlanTaggingModel');
const Settings5Enum = require('./Models/Settings5Enum');
const BonjourForwardingModel = require('./Models/BonjourForwardingModel');
const Settings6Enum = require('./Models/Settings6Enum');
const Rule3Model = require('./Models/Rule3Model');
const ServiceEnum = require('./Models/ServiceEnum');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const CreateNetworkHttpServerModel = require('./Models/CreateNetworkHttpServerModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('./Models/CreateNetworkHttpServersWebhookTestModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const Rule6Model = require('./Models/Rule6Model');
const Policy5Enum = require('./Models/Policy5Enum');
const Type5Enum = require('./Models/Type5Enum');
const UpdateNetworkNetflowSettingsModel = require('./Models/UpdateNetworkNetflowSettingsModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const Rule7Model = require('./Models/Rule7Model');
const Uplink1Enum = require('./Models/Uplink1Enum');
const PortRuleModel = require('./Models/PortRuleModel');
const Protocol3Enum = require('./Models/Protocol3Enum');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const Rule8Model = require('./Models/Rule8Model');
const AllowedInboundModel = require('./Models/AllowedInboundModel');
const Protocol4Enum = require('./Models/Protocol4Enum');
const CreateNetworkPiiRequestModel = require('./Models/CreateNetworkPiiRequestModel');
const Type6Enum = require('./Models/Type6Enum');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const Rule9Model = require('./Models/Rule9Model');
const Uplink3Enum = require('./Models/Uplink3Enum');
const Protocol5Enum = require('./Models/Protocol5Enum');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('./Models/UpdateNetworkSecurityIntrusionSettingsModel');
const ModeEnum = require('./Models/ModeEnum');
const IdsRulesetsEnum = require('./Models/IdsRulesetsEnum');
const ProtectedNetworksModel = require('./Models/ProtectedNetworksModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const Mode1Enum = require('./Models/Mode1Enum');
const AllowedUrlModel = require('./Models/AllowedUrlModel');
const AllowedFileModel = require('./Models/AllowedFileModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const Mode2Enum = require('./Models/Mode2Enum');
const HubModel = require('./Models/HubModel');
const SubnetModel = require('./Models/SubnetModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSmAppPolarisModel = require('./Models/UpdateNetworkSmAppPolarisModel');
const CreateNetworkSmBypassActivationLockAttemptModel =
  require('./Models/CreateNetworkSmBypassActivationLockAttemptModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const DeviceFieldsModel = require('./Models/DeviceFieldsModel');
const WipeNetworkSmDeviceModel = require('./Models/WipeNetworkSmDeviceModel');
const CheckinNetworkSmDevicesModel = require('./Models/CheckinNetworkSmDevicesModel');
const MoveNetworkSmDevicesModel = require('./Models/MoveNetworkSmDevicesModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const CreateNetworkSmTargetGroupModel = require('./Models/CreateNetworkSmTargetGroupModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSnmpSettingsModel = require('./Models/UpdateNetworkSnmpSettingsModel');
const Access1Enum = require('./Models/Access1Enum');
const UserModel = require('./Models/UserModel');
const SsidNumberEnum = require('./Models/SsidNumberEnum');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const AuthModeEnum = require('./Models/AuthModeEnum');
const EnterpriseAdminAccessEnum = require('./Models/EnterpriseAdminAccessEnum');
const EncryptionModeEnum = require('./Models/EncryptionModeEnum');
const WpaEncryptionModeEnum = require('./Models/WpaEncryptionModeEnum');
const SplashPageEnum = require('./Models/SplashPageEnum');
const RadiusServerModel = require('./Models/RadiusServerModel');
const RadiusFailoverPolicyEnum = require('./Models/RadiusFailoverPolicyEnum');
const RadiusLoadBalancingPolicyEnum = require('./Models/RadiusLoadBalancingPolicyEnum');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule10Model = require('./Models/Rule10Model');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const Rule11Model = require('./Models/Rule11Model');
const CreateNetworkStaticRouteModel = require('./Models/CreateNetworkStaticRouteModel');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const ReservedIpRange1Model = require('./Models/ReservedIpRange1Model');
const UpdateNetworkSwitchAccessControlListsModel =
  require('./Models/UpdateNetworkSwitchAccessControlListsModel');
const Rule12Model = require('./Models/Rule12Model');
const Policy7Enum = require('./Models/Policy7Enum');
const IpVersionEnum = require('./Models/IpVersionEnum');
const Protocol7Enum = require('./Models/Protocol7Enum');
const CreateNetworkSwitchLinkAggregationModel =
  require('./Models/CreateNetworkSwitchLinkAggregationModel');
const SwitchPortModel = require('./Models/SwitchPortModel');
const SwitchProfilePortModel = require('./Models/SwitchProfilePortModel');
const UpdateNetworkSwitchLinkAggregationModel =
  require('./Models/UpdateNetworkSwitchLinkAggregationModel');
const CreateNetworkSwitchPortScheduleModel =
  require('./Models/CreateNetworkSwitchPortScheduleModel');
const PortScheduleModel = require('./Models/PortScheduleModel');
const UpdateNetworkSwitchPortScheduleModel =
  require('./Models/UpdateNetworkSwitchPortScheduleModel');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const PowerTypeEnum = require('./Models/PowerTypeEnum');
const UpdateNetworkSwitchSettingsDhcpServerPolicyModel =
  require('./Models/UpdateNetworkSwitchSettingsDhcpServerPolicyModel');
const DefaultPolicyEnum = require('./Models/DefaultPolicyEnum');
const UpdateNetworkSwitchSettingsDscpToCosMappingsModel =
  require('./Models/UpdateNetworkSwitchSettingsDscpToCosMappingsModel');
const MappingModel = require('./Models/MappingModel');
const UpdateNetworkSwitchSettingsMtuModel = require('./Models/UpdateNetworkSwitchSettingsMtuModel');
const OverrideModel = require('./Models/OverrideModel');
const UpdateNetworkSwitchSettingsMulticastModel =
  require('./Models/UpdateNetworkSwitchSettingsMulticastModel');
const DefaultSettingsModel = require('./Models/DefaultSettingsModel');
const Override1Model = require('./Models/Override1Model');
const CreateNetworkSwitchSettingsQosRuleModel =
  require('./Models/CreateNetworkSwitchSettingsQosRuleModel');
const Protocol8Enum = require('./Models/Protocol8Enum');
const UpdateNetworkSwitchSettingsQosRulesOrderModel =
  require('./Models/UpdateNetworkSwitchSettingsQosRulesOrderModel');
const UpdateNetworkSwitchSettingsQosRuleModel =
  require('./Models/UpdateNetworkSwitchSettingsQosRuleModel');
const Protocol9Enum = require('./Models/Protocol9Enum');
const UpdateNetworkSwitchSettingsStormControlModel =
  require('./Models/UpdateNetworkSwitchSettingsStormControlModel');
const UpdateNetworkSwitchSettingsStpModel = require('./Models/UpdateNetworkSwitchSettingsStpModel');
const StpBridgePriorityModel = require('./Models/StpBridgePriorityModel');
const CreateNetworkSwitchStackModel = require('./Models/CreateNetworkSwitchStackModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkTrafficAnalysisSettingsModel =
  require('./Models/UpdateNetworkTrafficAnalysisSettingsModel');
const Mode3Enum = require('./Models/Mode3Enum');
const CustomPieChartItemModel = require('./Models/CustomPieChartItemModel');
const Type8Enum = require('./Models/Type8Enum');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const Rule13Model = require('./Models/Rule13Model');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits7Model = require('./Models/BandwidthLimits7Model');
const Wan11Model = require('./Models/Wan11Model');
const Wan21Model = require('./Models/Wan21Model');
const CellularModel = require('./Models/CellularModel');
const CreateNetworkVlanModel = require('./Models/CreateNetworkVlanModel');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const DhcpHandlingEnum = require('./Models/DhcpHandlingEnum');
const DhcpLeaseTimeEnum = require('./Models/DhcpLeaseTimeEnum');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const Type10Enum = require('./Models/Type10Enum');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkWarmSpareSettingsModel = require('./Models/UpdateNetworkWarmSpareSettingsModel');
const CreateNetworkWirelessRfProfileModel = require('./Models/CreateNetworkWirelessRfProfileModel');
const MinBitrateTypeEnum = require('./Models/MinBitrateTypeEnum');
const BandSelectionTypeEnum = require('./Models/BandSelectionTypeEnum');
const ApBandSettingsModel = require('./Models/ApBandSettingsModel');
const BandOperationModeEnum = require('./Models/BandOperationModeEnum');
const TwoFourGhzSettingsModel = require('./Models/TwoFourGhzSettingsModel');
const FiveGhzSettingsModel = require('./Models/FiveGhzSettingsModel');
const UpdateNetworkWirelessRfProfileModel = require('./Models/UpdateNetworkWirelessRfProfileModel');
const MinBitrateType1Enum = require('./Models/MinBitrateType1Enum');
const BandSelectionType1Enum = require('./Models/BandSelectionType1Enum');
const ApBandSettings1Model = require('./Models/ApBandSettings1Model');
const BandOperationMode1Enum = require('./Models/BandOperationMode1Enum');
const TwoFourGhzSettings1Model = require('./Models/TwoFourGhzSettings1Model');
const FiveGhzSettings1Model = require('./Models/FiveGhzSettings1Model');
const UpdateNetworkWirelessSettingsModel = require('./Models/UpdateNetworkWirelessSettingsModel');
const LockNetworkSmDevicesModel = require('./Models/LockNetworkSmDevicesModel');
const CreateOrganizationModel = require('./Models/CreateOrganizationModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CreateOrganizationActionBatchModel = require('./Models/CreateOrganizationActionBatchModel');
const ActionModel = require('./Models/ActionModel');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const CreateOrganizationAdminModel = require('./Models/CreateOrganizationAdminModel');
const OrgAccessEnum = require('./Models/OrgAccessEnum');
const TagModel = require('./Models/TagModel');
const NetworkModel = require('./Models/NetworkModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const CreateOrganizationBrandingPolicyModel =
  require('./Models/CreateOrganizationBrandingPolicyModel');
const AdminSettingsModel = require('./Models/AdminSettingsModel');
const AppliesToEnum = require('./Models/AppliesToEnum');
const HelpSettingsModel = require('./Models/HelpSettingsModel');
const HelpTabEnum = require('./Models/HelpTabEnum');
const GetHelpSubtabEnum = require('./Models/GetHelpSubtabEnum');
const CommunitySubtabEnum = require('./Models/CommunitySubtabEnum');
const CasesSubtabEnum = require('./Models/CasesSubtabEnum');
const DataProtectionRequestsSubtabEnum = require('./Models/DataProtectionRequestsSubtabEnum');
const UniversalSearchKnowledgeBaseSearchEnum =
  require('./Models/UniversalSearchKnowledgeBaseSearchEnum');
const NewFeaturesSubtabEnum = require('./Models/NewFeaturesSubtabEnum');
const FirewallInfoSubtabEnum = require('./Models/FirewallInfoSubtabEnum');
const ApiDocsSubtabEnum = require('./Models/ApiDocsSubtabEnum');
const HardwareReplacementsSubtabEnum = require('./Models/HardwareReplacementsSubtabEnum');
const SmForumsEnum = require('./Models/SmForumsEnum');
const UpdateOrganizationBrandingPoliciesPrioritiesModel =
  require('./Models/UpdateOrganizationBrandingPoliciesPrioritiesModel');
const UpdateOrganizationBrandingPolicyModel =
  require('./Models/UpdateOrganizationBrandingPolicyModel');
const HelpSettings1Model = require('./Models/HelpSettings1Model');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const LicenseModel = require('./Models/LicenseModel');
const Mode4Enum = require('./Models/Mode4Enum');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const CreateOrganizationInsightMonitoredMediaServerModel =
  require('./Models/CreateOrganizationInsightMonitoredMediaServerModel');
const UpdateOrganizationInsightMonitoredMediaServerModel =
  require('./Models/UpdateOrganizationInsightMonitoredMediaServerModel');
const StateEnum = require('./Models/StateEnum');
const AssignOrganizationLicensesSeatsModel =
  require('./Models/AssignOrganizationLicensesSeatsModel');
const MoveOrganizationLicensesModel = require('./Models/MoveOrganizationLicensesModel');
const MoveOrganizationLicensesSeatsModel = require('./Models/MoveOrganizationLicensesSeatsModel');
const RenewOrganizationLicensesSeatsModel = require('./Models/RenewOrganizationLicensesSeatsModel');
const UpdateOrganizationLicenseModel = require('./Models/UpdateOrganizationLicenseModel');
const CreateOrganizationNetworkModel = require('./Models/CreateOrganizationNetworkModel');
const CombineOrganizationNetworksModel = require('./Models/CombineOrganizationNetworksModel');
const CreateOrganizationSamlRoleModel = require('./Models/CreateOrganizationSamlRoleModel');
const Tag2Model = require('./Models/Tag2Model');
const Network2Model = require('./Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('./Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const WhitelistedRuleModel = require('./Models/WhitelistedRuleModel');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const V3AuthModeEnum = require('./Models/V3AuthModeEnum');
const V3PrivModeEnum = require('./Models/V3PrivModeEnum');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('./Models/PeerModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const Rule14Model = require('./Models/Rule14Model');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of meraki
    Configuration,
    // controllers of meraki
    APIUsageController,
    ActionBatchesController,
    AdminsController,
    AlertSettingsController,
    BluetoothClientsController,
    BluetoothSettingsController,
    CameraQualityRetentionProfilesController,
    CamerasController,
    ChangeLogController,
    ClientsController,
    ConfigTemplatesController,
    ConnectivityMonitoringDestinationsController,
    ContentFilteringCategoriesController,
    ContentFilteringRulesController,
    DashboardBrandingPoliciesController,
    DevicesController,
    EventsController,
    FirewalledServicesController,
    FloorplansController,
    GroupPoliciesController,
    HTTPServersController,
    IntrusionSettingsController,
    LicensesController,
    LinkAggregationsController,
    MGDHCPSettingsController,
    MGLANSettingsController,
    MGConnectivityMonitoringDestinationsController,
    MGPortForwardingRulesController,
    MGSubnetPoolSettingsController,
    MGUplinkSettingsController,
    MRL3FirewallController,
    MVSenseController,
    MX11NATRulesController,
    MX1ManyNATRulesController,
    MXL3FirewallController,
    MXL7ApplicationCategoriesController,
    MXL7FirewallController,
    MXVLANPortsController,
    MXVPNFirewallController,
    MXCellularFirewallController,
    MXInboundFirewallController,
    MXPortForwardingRulesController,
    MXStaticRoutesController,
    MXWarmSpareSettingsController,
    MalwareSettingsController,
    ManagementInterfaceSettingsController,
    MerakiAuthUsersController,
    MonitoredMediaServersController,
    NamedTagScopeController,
    NetflowSettingsController,
    NetworksController,
    OpenAPISpecController,
    OrganizationsController,
    PIIController,
    RadioSettingsController,
    SAMLRolesController,
    SMController,
    SNMPSettingsController,
    SsidsController,
    SecurityEventsController,
    SplashLoginAttemptsController,
    SplashSettingsController,
    SwitchAclsController,
    SwitchPortSchedulesController,
    SwitchPortsController,
    SwitchProfilesController,
    SwitchSettingsController,
    SwitchStacksController,
    SyslogServersController,
    TrafficAnalysisSettingsController,
    TrafficShapingController,
    UplinkSettingsController,
    VlansController,
    WebhookLogsController,
    WirelessHealthController,
    WirelessSettingsController,
    // models of meraki
    ObjectTypeEnum,
    UpdateDeviceCameraQualityAndRetentionSettingsModel,
    QualityEnum,
    ResolutionEnum,
    UpdateDeviceCellularGatewaySettingsModel,
    ReservedIpRangeModel,
    FixedIpAssignmentModel,
    UpdateDeviceCellularGatewaySettingsPortForwardingRulesModel,
    RuleModel,
    CycleDeviceSwitchPortsModel,
    UpdateDeviceSwitchPortModel,
    TypeEnum,
    StpGuardEnum,
    UdldEnum,
    UpdateDeviceWirelessBluetoothSettingsModel,
    UpdateNetworkModel,
    UpdateNetworkAlertSettingsModel,
    DefaultDestinationsModel,
    AlertModel,
    UpdateNetworkApplianceFirewallInboundFirewallRulesModel,
    Rule1Model,
    PolicyEnum,
    ProtocolEnum,
    UpdateNetworkAppliancePortModel,
    BindNetworkModel,
    UpdateNetworkBluetoothSettingsModel,
    MajorMinorAssignmentModeEnum,
    CreateNetworkCameraQualityRetentionProfileModel,
    VideoSettingsModel,
    MV21MV71Model,
    Quality1Enum,
    MV12MV22MV72Model,
    Resolution1Enum,
    MV32Model,
    Quality3Enum,
    Resolution2Enum,
    MV12WEModel,
    MV22XMV72XModel,
    Resolution4Enum,
    UpdateNetworkCameraQualityRetentionProfileModel,
    GenerateNetworkCameraSnapshotModel,
    UpdateNetworkCellularFirewallRulesModel,
    UpdateNetworkCellularGatewaySettingsConnectivityMonitoringDestinationsModel,
    DestinationModel,
    UpdateNetworkCellularGatewaySettingsDhcpModel,
    UpdateNetworkCellularGatewaySettingsSubnetPoolModel,
    UpdateNetworkCellularGatewaySettingsUplinkModel,
    BandwidthLimitsModel,
    ProvisionNetworkClientsModel,
    DevicePolicyEnum,
    PoliciesBySecurityApplianceModel,
    DevicePolicy1Enum,
    GeneratedObjectModel,
    DevicePolicy2Enum,
    UpdateNetworkClientPolicyModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    GeneratedObject10Model,
    UpdateNetworkConnectivityMonitoringDestinationsModel,
    UpdateNetworkContentFilteringModel,
    UrlCategoryListSizeEnum,
    ClaimNetworkDevicesModel,
    UpdateNetworkDeviceModel,
    BlinkNetworkDeviceLedsModel,
    UplinkEnum,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    Wan1Model,
    WanEnabledEnum,
    Wan2Model,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    UpdateNetworkFirewalledServiceModel,
    AccessEnum,
    CreateNetworkFloorPlanModel,
    CenterModel,
    BottomLeftCornerModel,
    BottomRightCornerModel,
    TopLeftCornerModel,
    TopRightCornerModel,
    UpdateNetworkFloorPlanModel,
    Center1Model,
    CreateNetworkGroupPolicyModel,
    SchedulingModel,
    MondayModel,
    TuesdayModel,
    WednesdayModel,
    ThursdayModel,
    FridayModel,
    SaturdayModel,
    SundayModel,
    BandwidthModel,
    SettingsEnum,
    BandwidthLimits1Model,
    FirewallAndTrafficShapingModel,
    Settings1Enum,
    TrafficShapingRuleModel,
    DefinitionModel,
    Type1Enum,
    PerClientBandwidthLimitsModel,
    BandwidthLimits2Model,
    L3FirewallRuleModel,
    L7FirewallRuleModel,
    Policy2Enum,
    Type2Enum,
    ContentFilteringModel,
    AllowedUrlPatternsModel,
    Settings2Enum,
    BlockedUrlPatternsModel,
    BlockedUrlCategoriesModel,
    Settings4Enum,
    SplashAuthSettingsEnum,
    VlanTaggingModel,
    Settings5Enum,
    BonjourForwardingModel,
    Settings6Enum,
    Rule3Model,
    ServiceEnum,
    UpdateNetworkGroupPolicyModel,
    CreateNetworkHttpServerModel,
    CreateNetworkHttpServersWebhookTestModel,
    UpdateNetworkHttpServerModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateNetworkL7FirewallRulesModel,
    Rule6Model,
    Policy5Enum,
    Type5Enum,
    UpdateNetworkNetflowSettingsModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule7Model,
    Uplink1Enum,
    PortRuleModel,
    Protocol3Enum,
    UpdateNetworkOneToOneNatRulesModel,
    Rule8Model,
    AllowedInboundModel,
    Protocol4Enum,
    CreateNetworkPiiRequestModel,
    Type6Enum,
    UpdateNetworkPortForwardingRulesModel,
    Rule9Model,
    Uplink3Enum,
    Protocol5Enum,
    UpdateNetworkSecurityIntrusionSettingsModel,
    ModeEnum,
    IdsRulesetsEnum,
    ProtectedNetworksModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    Mode1Enum,
    AllowedUrlModel,
    AllowedFileModel,
    UpdateNetworkSiteToSiteVpnModel,
    Mode2Enum,
    HubModel,
    SubnetModel,
    CreateNetworkSmAppPolarisModel,
    UpdateNetworkSmAppPolarisModel,
    CreateNetworkSmBypassActivationLockAttemptModel,
    UpdateNetworkSmDeviceFieldsModel,
    DeviceFieldsModel,
    WipeNetworkSmDeviceModel,
    CheckinNetworkSmDevicesModel,
    MoveNetworkSmDevicesModel,
    UpdateNetworkSmDevicesTagsModel,
    CreateNetworkSmTargetGroupModel,
    UpdateNetworkSmTargetGroupModel,
    UpdateNetworkSnmpSettingsModel,
    Access1Enum,
    UserModel,
    SsidNumberEnum,
    UpdateNetworkSsidModel,
    AuthModeEnum,
    EnterpriseAdminAccessEnum,
    EncryptionModeEnum,
    WpaEncryptionModeEnum,
    SplashPageEnum,
    RadiusServerModel,
    RadiusFailoverPolicyEnum,
    RadiusLoadBalancingPolicyEnum,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule10Model,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSsidTrafficShapingModel,
    Rule11Model,
    CreateNetworkStaticRouteModel,
    UpdateNetworkStaticRouteModel,
    ReservedIpRange1Model,
    UpdateNetworkSwitchAccessControlListsModel,
    Rule12Model,
    Policy7Enum,
    IpVersionEnum,
    Protocol7Enum,
    CreateNetworkSwitchLinkAggregationModel,
    SwitchPortModel,
    SwitchProfilePortModel,
    UpdateNetworkSwitchLinkAggregationModel,
    CreateNetworkSwitchPortScheduleModel,
    PortScheduleModel,
    UpdateNetworkSwitchPortScheduleModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    PowerTypeEnum,
    UpdateNetworkSwitchSettingsDhcpServerPolicyModel,
    DefaultPolicyEnum,
    UpdateNetworkSwitchSettingsDscpToCosMappingsModel,
    MappingModel,
    UpdateNetworkSwitchSettingsMtuModel,
    OverrideModel,
    UpdateNetworkSwitchSettingsMulticastModel,
    DefaultSettingsModel,
    Override1Model,
    CreateNetworkSwitchSettingsQosRuleModel,
    Protocol8Enum,
    UpdateNetworkSwitchSettingsQosRulesOrderModel,
    UpdateNetworkSwitchSettingsQosRuleModel,
    Protocol9Enum,
    UpdateNetworkSwitchSettingsStormControlModel,
    UpdateNetworkSwitchSettingsStpModel,
    StpBridgePriorityModel,
    CreateNetworkSwitchStackModel,
    AddNetworkSwitchStackModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkTrafficAnalysisSettingsModel,
    Mode3Enum,
    CustomPieChartItemModel,
    Type8Enum,
    UpdateNetworkTrafficShapingModel,
    Rule13Model,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits7Model,
    Wan11Model,
    Wan21Model,
    CellularModel,
    CreateNetworkVlanModel,
    UpdateNetworkVlanModel,
    DhcpHandlingEnum,
    DhcpLeaseTimeEnum,
    DhcpOptionModel,
    Type10Enum,
    UpdateNetworkVlansEnabledStateModel,
    UpdateNetworkWarmSpareSettingsModel,
    CreateNetworkWirelessRfProfileModel,
    MinBitrateTypeEnum,
    BandSelectionTypeEnum,
    ApBandSettingsModel,
    BandOperationModeEnum,
    TwoFourGhzSettingsModel,
    FiveGhzSettingsModel,
    UpdateNetworkWirelessRfProfileModel,
    MinBitrateType1Enum,
    BandSelectionType1Enum,
    ApBandSettings1Model,
    BandOperationMode1Enum,
    TwoFourGhzSettings1Model,
    FiveGhzSettings1Model,
    UpdateNetworkWirelessSettingsModel,
    LockNetworkSmDevicesModel,
    CreateOrganizationModel,
    UpdateOrganizationModel,
    CreateOrganizationActionBatchModel,
    ActionModel,
    UpdateOrganizationActionBatchModel,
    CreateOrganizationAdminModel,
    OrgAccessEnum,
    TagModel,
    NetworkModel,
    UpdateOrganizationAdminModel,
    CreateOrganizationBrandingPolicyModel,
    AdminSettingsModel,
    AppliesToEnum,
    HelpSettingsModel,
    HelpTabEnum,
    GetHelpSubtabEnum,
    CommunitySubtabEnum,
    CasesSubtabEnum,
    DataProtectionRequestsSubtabEnum,
    UniversalSearchKnowledgeBaseSearchEnum,
    NewFeaturesSubtabEnum,
    FirewallInfoSubtabEnum,
    ApiDocsSubtabEnum,
    HardwareReplacementsSubtabEnum,
    SmForumsEnum,
    UpdateOrganizationBrandingPoliciesPrioritiesModel,
    UpdateOrganizationBrandingPolicyModel,
    HelpSettings1Model,
    ClaimOrganizationModel,
    LicenseModel,
    Mode4Enum,
    CloneOrganizationModel,
    CreateOrganizationInsightMonitoredMediaServerModel,
    UpdateOrganizationInsightMonitoredMediaServerModel,
    StateEnum,
    AssignOrganizationLicensesSeatsModel,
    MoveOrganizationLicensesModel,
    MoveOrganizationLicensesSeatsModel,
    RenewOrganizationLicensesSeatsModel,
    UpdateOrganizationLicenseModel,
    CreateOrganizationNetworkModel,
    CombineOrganizationNetworksModel,
    CreateOrganizationSamlRoleModel,
    Tag2Model,
    Network2Model,
    UpdateOrganizationSamlRoleModel,
    UpdateOrganizationSecurityIntrusionSettingsModel,
    WhitelistedRuleModel,
    UpdateOrganizationSnmpModel,
    V3AuthModeEnum,
    V3PrivModeEnum,
    UpdateOrganizationThirdPartyVPNPeersModel,
    PeerModel,
    IpsecPoliciesModel,
    UpdateOrganizationVpnFirewallRulesModel,
    Rule14Model,
    // exceptions of meraki
    APIException,
};

module.exports = initializer;
